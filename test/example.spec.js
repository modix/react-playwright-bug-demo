const { test, expect } = require('@playwright/test');

test('Test an element which returns a HTML element', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const divComponentLocator = page.locator('_react=DivComponent');

  await expect(divComponentLocator).toBeVisible();
  await expect(divComponentLocator).toHaveText('Text');
});

test('Test an element which returns a string', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const textComponentLocator = page.locator('_react=TextComponent');

  await expect(textComponentLocator).toBeVisible();
  await expect(textComponentLocator).toHaveText('Text');
});
