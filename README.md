# DevOps/SRE Take-Home: Nuxt Bookstore

You have 5 hours hard cap.

This repo intentionally contains around 30 hours of possible work. Do not try to fix everything. Choose the highest-risk subset, implement a focused change, and document your reasoning.

## Product

Book Harbor is a small bookstore catalog built with Nuxt 3 and Vue 3. Users can browse books, add them to a cart, and create an order. A background worker simulates order confirmation.

The repository includes:

- Nuxt 3 storefront and Nitro API routes.
- Postgres for books and orders.
- Redis queue and JavaScript worker.
- Docker Compose for local execution.
- A weak CI workflow.
- Basic infrastructure snippets.

## Constraints

- Do not use paid services.
- Local execution must work with Docker Compose.
- Cloud/free-tier usage is optional, not required.
- Do not put real secrets in the repo.
- Do not rewrite the product or replace Nuxt to avoid existing problems.

## Quick Start

```bash
docker compose up -d --build
```

Open:

- App: `http://localhost:3000`
- Health: `http://localhost:3000/api/health`

## Deliverables

- Code/config changes.
- `NOTES.md` with:
  - top risks found;
  - what you changed in 5 hours;
  - what you skipped and why;
  - how to run/test;
  - rollback/cleanup notes;
  - next 30/60/90 plan.

## Submission

Submit a pull request, patch/diff, or repository link.
