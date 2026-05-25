import { query } from "../db/client.js";
import { pingRedis } from "../jobs/queue.js";

async function checkDb() {
  try {
    await query("SELECT 1");
    return "ok";
  } catch (err) {
    return `error: ${err.code || err.message}`;
  }
}

async function checkRedis() {
  try {
    const ok = await pingRedis();
    return ok ? "ok" : "unexpected reply";
  } catch (err) {
    return `error: ${err.code || err.message}`;
  }
}

export default defineEventHandler(async (event) => {
  const [db, redis] = await Promise.all([checkDb(), checkRedis()]);
  const ready = db === "ok" && redis === "ok";

  if (!ready) {
    setResponseStatus(event, 503);
  }

  return { ready, db, redis };
});
