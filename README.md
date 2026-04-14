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

## CI/CD

This project uses GitHub Actions for continuous integration and deployment. The pipeline includes:

- Automated testing across multiple browsers (Chromium, Firefox, WebKit)
- Code quality analysis with SonarQube

### Setup GitHub Secrets

To enable SonarQube analysis, add the following secrets to your GitHub repository:

- `SONAR_TOKEN`: Your SonarQube/SonarCloud token
- `SONAR_HOST_URL`: Your SonarQube server URL (e.g., `https://sonarcloud.io` for SonarCloud)

The CI pipeline runs on every push to the `develop` and `main` branches (including merges).

## Writing Tests

Tests are located in the `tests/` directory. Use the Playwright test runner to write and run your tests.

For more information, visit the [Playwright documentation](https://playwright.dev/).