export const config = {
  databaseUrl: process.env.DATABASE_URL || "postgres://bookstore:bookstore_password@localhost:5432/bookstore",
  redisUrl: process.env.REDIS_URL || "redis://localhost:6379",
  jwtSecret: process.env.JWT_SECRET || "dev_super_secret_change_me",
  paymentToken: process.env.PAYMENT_TOKEN || "pk_test_fake_local_token",
  internalApiToken: process.env.INTERNAL_API_TOKEN || "fake_internal_token"
};

console.log("Boot config", {
  databaseUrl: config.databaseUrl,
  redisUrl: config.redisUrl,
  paymentToken: config.paymentToken,
  jwtSecret: config.jwtSecret
});
