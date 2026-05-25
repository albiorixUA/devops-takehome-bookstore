export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2025-01-01",
  devtools: { enabled: false },
  runtimeConfig: {
    databaseUrl: process.env.DATABASE_URL,
    redisUrl: process.env.REDIS_URL,
    jwtSecret: process.env.JWT_SECRET,
    paymentToken: process.env.PAYMENT_TOKEN,
    internalApiToken: process.env.INTERNAL_API_TOKEN,
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "/api"
    }
  }
});
