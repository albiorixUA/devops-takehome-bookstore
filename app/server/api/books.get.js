import { query } from "../db/client.js";
import { log } from "../utils/logger.js";

export default defineEventHandler(async () => {
  log("books list requested");

  const result = await query(
    "SELECT slug, title, author, description, price_cents, stock FROM books ORDER BY title ASC"
  );

  return {
    items: result.rows
  };
});
