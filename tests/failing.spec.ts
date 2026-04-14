import { test, expect } from '@playwright/test';

test.describe('Failing Tests for Trace Viewer Demo', () => {
  test('intentional failure - wrong assertion', async ({ page }) => {
    await page.goto('/inventory.html');

    // This will fail because the title is "Swag Labs", not "Wrong Title"
    await expect(page).toHaveTitle('Wrong Title');
  });

  test('intentional failure - element not found', async ({ page }) => {
    await page.goto('/inventory.html');

    // This element doesn't exist
    await expect(page.locator('[data-test="non-existent-element"]')).toBeVisible();
  });
});