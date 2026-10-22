import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  analyticsChoice,
  safePage,
  validMeasurement,
} from "../src/analytics.js";
test("analytics never carries query or hash inputs; consent expires", () => {
  assert.equal(
    safePage("https://example.com/ko/?email=private#words=secret"),
    "https://example.com/ko/",
  );
  const now = Date.now();
  assert.equal(
    analyticsChoice(JSON.stringify({ choice: "granted", at: now }), now),
    "granted",
  );
  for (const raw of [
    "null",
    "bad",
    JSON.stringify({ choice: "granted", at: now + 1 }),
    JSON.stringify({ choice: "granted", at: now - 181 * 86400000 }),
  ])
    assert.equal(analyticsChoice(raw, now), null);
  assert(validMeasurement("G-ABC1234567"));
  assert(!validMeasurement("G-<script>"));
});
test("every message has all locales and consistent interpolation fields", async () => {
  const messages = JSON.parse(await readFile("src/messages.json", "utf8"));
  for (const [key, values] of Object.entries(messages))
    for (const lang of ["en", "ko", "ja", "es"]) {
      assert(values[lang], `${key}: ${lang}`);
      assert.deepEqual(
        [...values[lang].matchAll(/\{\w+\}/g)].map((x) => x[0]).sort(),
        [...key.matchAll(/\{\w+\}/g)].map((x) => x[0]).sort(),
        key,
      );
    }
});
