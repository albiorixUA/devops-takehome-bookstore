import { query, closePool } from "./client.js";

const books = [
  ["system-design-field-guide", "System Design Field Guide", "Mira Koval", "Practical notes on scalable web systems.", 3200, 8],
  ["observability-in-practice", "Observability in Practice", "Jon Bell", "Logs, metrics, traces, and operational habits.", 2800, 12],
  ["cloud-cost-notes", "Cloud Cost Notes", "Dana Wu", "Small decisions that reduce cloud waste.", 2200, 5],
  ["release-engineering", "Release Engineering", "Sam Ortiz", "Safer build, deploy, and rollback workflows.", 2600, 6],
  ["postgres-for-products", "Postgres for Products", "Ira Novak", "Database operations for product engineers.", 2400, 9],
  ["queue-reliability", "Queue Reliability", "Lena Gray", "Retries, DLQs, idempotency, and backpressure.", 2100, 4],
  ["incident-command", "Incident Command", "Omar Hill", "Clear response patterns for production incidents.", 1900, 7],
  ["secure-runtime-config", "Secure Runtime Config", "Nia Stone", "Avoiding secret leaks in modern JavaScript apps.", 2300, 10],
  ["docker-in-production", "Docker in Production", "Leo Park", "Images, runtime, and container hygiene.", 2500, 3],
  ["the-readiness-check", "The Readiness Check", "Eva Reed", "Health checks, readiness, and deployment gates.", 1800, 11]
];

for (const book of books) {
  await query(
    `INSERT INTO books (slug, title, author, description, price_cents, stock)
     VALUES ($1, $2, $3, $4, $5, $6)
     ON CONFLICT (slug) DO NOTHING`,
    book
  );
}

console.log("seed complete");
await closePool();
