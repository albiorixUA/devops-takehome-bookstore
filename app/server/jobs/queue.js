import Redis from "ioredis";
import { config } from "../utils/config.js";

const redis = new Redis(config.redisUrl);

export async function enqueueOrder(order) {
  await redis.lpush("order_events", JSON.stringify(order));
}

export async function getNextOrder() {
  const raw = await redis.rpop("order_events");
  return raw ? JSON.parse(raw) : null;
}

export async function closeQueue() {
  redis.disconnect();
}
