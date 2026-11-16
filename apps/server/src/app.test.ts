import assert from "node:assert/strict";
import { test } from "node:test";
import { createApp } from "./app.js";

test("health endpoint returns a non-cacheable service status", async () => {
  const server = createApp().listen(0);
  await new Promise<void>((resolve) => server.once("listening", resolve));
  const address = server.address();
  assert.ok(address && typeof address !== "string");

  const response = await fetch(`http://127.0.0.1:${address.port}/health`);
  const body = await response.json() as { status: string; service: string; timestamp: string };
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("cache-control"), "no-store");
  assert.equal(body.status, "ok");
  assert.equal(body.service, "tbp-api");
  assert.ok(Number.isNaN(Date.parse(body.timestamp)) === false);
  await new Promise<void>((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
});
