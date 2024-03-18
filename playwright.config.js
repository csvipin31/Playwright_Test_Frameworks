const { devices } = require('@playwright/test');
const { selectProjects } = require('./tests/utils/browserConfig')
const dotenv = require('dotenv');

dotenv.config({ path: `${__dirname}/.env` });

/**
 * See documentation on https://playwright.dev/docs/test-configuration.
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */

const browserType = process.env.BROWSER_TYPE || 'chromium';
const isMobile = process.env.IS_MOBILE === 'true'; 

const projects = selectProjects(browserType, isMobile);
 
const config = {

  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: './tests',

  // Custom pattern to match test files
  testMatch: ['**/*.pw.js'],
  
  // Maximum time one test can run for.
  timeout: 30 * 1000, 

  // Maximum time expect() should wait for the condition to be met.
  expect: {
    timeout: 5000, 
  },

  // Fail the build on CI if test.only is accidentally left in the code.
  forbidOnly: !!process.env.CI, 

  // Retry on CI only.
  retries: process.env.CI ? 2 : 0, 

  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 1 : undefined, 

   // Use the HTML reporter.
  reporter: 'html',

  use: {
    headless: process.env.HEADLESS === 'true', // Run tests in non-headless mode to see the browser.
    actionTimeout: 0, // No limit on individual action timeouts.
    baseURL: process.env.BASE_URL, // Base URL for all navigations.
    screenshot: 'on', // Take a screenshot for each test step.
    trace: 'retain-on-failure', // Collect trace when retrying the failed test.
    video: 'retain-on-failure', // Record video for each test, but remove all videos from successful test runs.
  },

  projects: projects,

  outputDir: 'test-results/', // Folder for test artifacts such as screenshots, videos, traces, etc.
};

module.exports = config;
