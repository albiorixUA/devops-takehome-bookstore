import crypto from "node:crypto";
import { query } from "../db/client.js";
import { enqueueOrder } from "../jobs/queue.js";
import { log } from "../utils/logger.js";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const orderId = crypto.randomUUID();
  const email = body.email || "reader@example.com";
  const items = body.items || [];

  log("creating order", { orderId, email, items });

  await query(
    "INSERT INTO orders (id, email, items, status) VALUES ($1, $2, $3, 'created')",
    [orderId, email, JSON.stringify(items)]
  );

  await enqueueOrder({
    order_id: orderId,
    email,
    items
  });

  return {
    order_id: orderId,
    status: "created"
  };
});
