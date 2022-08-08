const { test, expect } = require("@playwright/test");

test("Server responds with the text 'Hello world!'", async ({ page }) => {
  const response = await page.goto("/");
  expect(await response.text()).toBe("Hello world!");
});
