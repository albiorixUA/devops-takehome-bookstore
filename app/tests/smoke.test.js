import test from "node:test";
import assert from "node:assert/strict";

const baseUrl = process.env.BASE_URL || "http://localhost:3000";

test("health endpoint responds", async () => {
  const response = await fetch(`${baseUrl}/api/health`);
  assert.equal(response.status, 200);
  const body = await response.json();
  assert.equal(body.ok, true);
});
