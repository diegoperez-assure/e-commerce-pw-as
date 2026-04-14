# E-commerce Playwright Automation

This project contains end-to-end tests for the e-commerce application using Playwright.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

- Run all tests: `npm test`
- Run tests in headed mode: `npm run test:headed`
- Run tests with UI mode: `npm run test:ui`

## Configuration

The Playwright configuration is in `playwright.config.ts`. You can modify the base URL, browsers, and other settings there.

## Writing Tests

Tests are located in the `tests/` directory. Use the Playwright test runner to write and run your tests.

For more information, visit the [Playwright documentation](https://playwright.dev/).