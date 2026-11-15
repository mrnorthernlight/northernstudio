import assert from "node:assert/strict";
import test from "node:test";
import en from "../messages/en.json" with { type: "json" };
import nl from "../messages/nl.json" with { type: "json" };

function paths(value, prefix = "") {
  if (Array.isArray(value)) {
    return value.flatMap((item, index) => paths(item, `${prefix}[${index}]`));
  }
  if (value && typeof value === "object") {
    return Object.keys(value).flatMap((key) => paths(value[key], prefix ? `${prefix}.${key}` : key));
  }
  return [prefix];
}

test("Dutch and English messages share the same structure", () => {
  assert.deepEqual(paths(nl), paths(en));
});

test("message leaves are non-empty strings", () => {
  for (const [name, tree] of [
    ["nl", nl],
    ["en", en],
  ]) {
    for (const path of paths(tree)) {
      const value = path.split(/\.|\[|\]/).filter(Boolean).reduce((current, part) => current[Number.isInteger(Number(part)) ? Number(part) : part], tree);
      assert.equal(typeof value, "string", `${name} ${path}`);
      assert.ok(value.trim().length > 0, `${name} ${path} is empty`);
    }
  }
});
