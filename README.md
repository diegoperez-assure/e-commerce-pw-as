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

## Reporting and Trace Analysis

When tests fail, Playwright generates detailed traces that can be viewed using the Trace Viewer for visual debugging:

1. **HTML Report**: Automatically generated after test runs. View with `npx playwright show-report`
2. **Trace Viewer**: For failed tests, traces are saved as `.zip` files in `test-results/`
   - View a specific trace: `npx playwright show-trace path/to/trace.zip`
   - Traces include screenshots, DOM snapshots, and action logs to help analyze failures

## Configuration

The Playwright configuration is in `playwright.config.ts`. You can modify the base URL, browsers, and other settings there.

## CI/CD

This project uses GitHub Actions for continuous integration and deployment. The pipeline includes:

- Automated testing across multiple browsers (Chromium, Firefox, WebKit)
- Code quality analysis with SonarQube

### Setup GitHub Secrets

To enable SonarQube analysis, add the following secret to your GitHub repository:

- `SONAR_TOKEN`: Your SonarCloud token (for SonarQube Cloud, the host URL is automatically set to `https://sonarcloud.io`)

The CI pipeline runs on every push to the `develop` and `main` branches (including merges).

## Writing Tests

Tests are located in the `tests/` directory. Use the Playwright test runner to write and run your tests.

For more information, visit the [Playwright documentation](https://playwright.dev/).