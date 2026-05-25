const required = ["DATABASE_URL", "REDIS_URL", "JWT_SECRET"];

export const config = {
  databaseUrl: process.env.DATABASE_URL,
  redisUrl: process.env.REDIS_URL,
  jwtSecret: process.env.JWT_SECRET,
  paymentToken: process.env.PAYMENT_TOKEN,
  internalApiToken: process.env.INTERNAL_API_TOKEN
};

const missing = required.filter((key) => !process.env[key]);

if (missing.length > 0) {
  if (process.env.NODE_ENV === "production") {
    throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
  }
  console.warn(`Warning: missing env vars (ok for local dev): ${missing.join(", ")}`);
}

console.log(
  "Boot config loaded",
  JSON.stringify({
    node_env: process.env.NODE_ENV || "development",
    has_database_url: Boolean(config.databaseUrl),
    has_redis_url: Boolean(config.redisUrl),
    has_jwt_secret: Boolean(config.jwtSecret),
    has_payment_token: Boolean(config.paymentToken),
    has_internal_api_token: Boolean(config.internalApiToken)
  })
);
