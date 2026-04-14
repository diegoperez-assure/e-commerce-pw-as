import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async checkout() {
    await this.page.locator('[data-test="checkout"]').click();
  }

  async getCartItems() {
    return this.page.locator('[data-test="inventory-item"]').all();
  }
}