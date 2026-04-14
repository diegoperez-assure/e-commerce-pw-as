import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Tests', () => {
  test.use({ storageState: undefined }); // Don't use global storage state for login test

  test('successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.isLoggedIn();
  });
});