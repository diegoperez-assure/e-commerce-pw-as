import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async addProductToCart(productName: string) {
    await this.page.locator(`[data-test="add-to-cart-${productName}"]`).click();
  }

  async goToCart() {
    await this.page.locator('[data-test="shopping-cart-link"]').click();
  }

  async getCartBadgeCount() {
    return this.page.locator('[data-test="shopping-cart-badge"]').textContent();
  }
}