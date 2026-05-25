# syntax=docker/dockerfile:1.7

# ----- Builder stage -----
FROM node:20-alpine AS builder

WORKDIR /build

COPY app/package*.json ./
RUN npm ci || npm install

COPY app/ ./
RUN npm run build

# Prune dev deps so we can copy a slim node_modules to the runtime stage.
RUN npm prune --omit=dev

# ----- Runtime stage -----
FROM node:20-alpine AS runtime

# wget is used by the compose healthcheck; tini is PID 1 for proper signal handling.
RUN apk add --no-cache wget tini

WORKDIR /app

# Built Nuxt output (used by `web`).
COPY --from=builder --chown=node:node /build/.output ./.output

# Raw server sources needed by the worker (it runs server/jobs/worker.js directly).
COPY --from=builder --chown=node:node /build/server ./server

# Production dependencies for the worker (Nuxt output bundles its own).
COPY --from=builder --chown=node:node /build/node_modules ./node_modules
COPY --from=builder --chown=node:node /build/package.json ./package.json

ENV NODE_ENV=production
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

USER node

EXPOSE 3000

ENTRYPOINT ["/sbin/tini", "--"]

# Default command runs the Nuxt SSR server (web service).
# The worker service overrides this in docker-compose.yml.
CMD ["node", ".output/server/index.mjs"]
