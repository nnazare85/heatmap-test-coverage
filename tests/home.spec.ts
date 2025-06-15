import { test, expect } from '@playwright/test';

test('interact with search and cart', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.fill('#search', 'shoes');
  await page.click('#cart');
});
