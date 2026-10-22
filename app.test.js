
const test = require("node:test");
const assert = require("node:assert/strict");

test("sample application message is correct", () => {
  const message =
    "Hello! My Node.js CI/CD pipeline is working.";

  assert.equal(
    message,
    "Hello! My Node.js CI/CD pipeline is working."
  );
});
