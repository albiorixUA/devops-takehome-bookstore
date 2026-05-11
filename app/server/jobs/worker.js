import { getNextOrder } from "./queue.js";
import { query } from "../db/client.js";
import { log, error } from "../utils/logger.js";

async function processOrder(order) {
  log("processing order", order);

  if (Math.random() < 0.15) {
    throw new Error("simulated flaky confirmation provider");
  }

  await query("UPDATE orders SET status = 'confirmed' WHERE id = $1", [order.order_id]);
  log("confirmed order", { order_id: order.order_id, email: order.email });
}

async function main() {
  log("worker started");

  while (true) {
    const order = await getNextOrder();
    if (!order) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      continue;
    }

    try {
      await processOrder(order);
    } catch (err) {
      error("order processing failed", { message: err.message, order });
      await new Promise((resolve) => setTimeout(resolve, 500));
      await processOrder(order);
    }
  }
}

main().catch((err) => {
  error("worker crashed", { message: err.message, stack: err.stack });
  process.exit(1);
});
