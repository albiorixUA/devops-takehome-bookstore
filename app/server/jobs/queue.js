import Redis from "ioredis";
import { config } from "../utils/config.js";

const redis = new Redis(config.redisUrl);

redis.on("error", (err) => {
  console.error(`${new Date().toISOString()} ERROR redis ${err.message}`);
});

export async function enqueueOrder(order) {
  await redis.lpush("order_events", JSON.stringify(order));
}

export async function getNextOrder() {
  const raw = await redis.rpop("order_events");
  return raw ? JSON.parse(raw) : null;
}

export async function pingRedis() {
  const reply = await redis.ping();
  return reply === "PONG";
}

export async function closeQueue() {
  redis.disconnect();
}
