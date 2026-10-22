import { test } from "node:test";
import assert from "node:assert/strict";
import { measures, categories } from "../src/data.js";
test("area squares scale by square root, lengths scale linearly", () => {
  assert.deepEqual(measures(100, 400, "area"), {
    ratio: 0.25,
    aScale: 0.5,
    bScale: 1,
  });
  assert.deepEqual(measures(100, 400, "height"), {
    ratio: 0.25,
    aScale: 0.25,
    bScale: 1,
  });
  assert.equal(measures(12756, 142984, "space").ratio, 12756 / 142984);
});
test("reject invalid dimensions and maintain scale for all pairs", () => {
  for (const v of [0, -1, NaN, Infinity])
    assert.throws(() => measures(v, 1, "area"));
  for (const [key, c] of Object.entries(categories))
    for (const a of c.items)
      for (const b of c.items) {
        const m = measures(a[2], b[2], key);
        assert(m.aScale > 0 && m.aScale <= 1);
        assert(m.bScale > 0 && m.bScale <= 1);
        assert.equal(m.ratio, a[2] / b[2]);
      }
});
