import { query } from "../db/client.js";
import { log } from "../utils/logger.js";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const slug = body.slug;
  const quantity = body.quantity || 1;

  log("cart item requested", { slug, quantity });

  const result = await query(
    "SELECT slug, title, price_cents, stock FROM books WHERE slug = $1",
    [slug]
  );

  if (result.rowCount === 0) {
    throw createError({ statusCode: 404, statusMessage: "Book not found" });
  }

  return {
    item: {
      ...result.rows[0],
      quantity
    }
  };
});
