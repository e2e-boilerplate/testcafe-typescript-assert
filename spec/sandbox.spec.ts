import { Selector } from "testcafe";
import * as assert from "assert";

fixture`Sandbox`.page`https://www.google.com`;

test("should be on Sandbox", async (t) => {
  const title = await Selector("title").innerText;

  assert.strictEqual(title, "Google");
});
