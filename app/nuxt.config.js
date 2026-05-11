export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2025-01-01",
  devtools: { enabled: true },
  runtimeConfig: {
    databaseUrl: process.env.DATABASE_URL,
    redisUrl: process.env.REDIS_URL,
    jwtSecret: process.env.JWT_SECRET,
    internalApiToken: process.env.INTERNAL_API_TOKEN,
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "/api",
      paymentToken: process.env.PAYMENT_TOKEN || process.env.NUXT_PUBLIC_PAYMENT_TOKEN,
      jwtSecret: process.env.JWT_SECRET,
      redisUrl: process.env.REDIS_URL
    }
  },
  nitro: {
    routeRules: {
      "/api/**": { cors: true }
    }
  }
});
