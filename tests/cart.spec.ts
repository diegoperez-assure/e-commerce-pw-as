import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

test.describe('Cart Tests', () => {
  test('add products to cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    // Assuming already on inventory page due to global state
    await page.goto('/inventory.html'); // Ensure we're on the page

    // Add a product to cart
    await inventoryPage.addProductToCart('sauce-labs-backpack');

    // Check cart badge
    const badgeCount = await inventoryPage.getCartBadgeCount();
    expect(badgeCount).toBe('1');

    // Go to cart
    await inventoryPage.goToCart();

    // Verify item in cart
    const items = await cartPage.getCartItems();
    expect(items.length).toBe(1);
  });
});