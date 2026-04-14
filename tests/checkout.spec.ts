import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('Checkout Tests', () => {
  test('complete checkout process', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // Go to inventory and add product
    await page.goto('/inventory.html');
    await inventoryPage.addProductToCart('sauce-labs-backpack');

    // Go to cart
    await inventoryPage.goToCart();

    // Checkout
    await cartPage.checkout();

    // Fill checkout info
    await checkoutPage.fillCheckoutInfo('John', 'Doe', '12345');

    // Finish checkout
    await checkoutPage.finishCheckout();

    // Verify confirmation
    const message = await checkoutPage.getConfirmationMessage();
    expect(message).toBe('Thank you for your order!');
  });
});