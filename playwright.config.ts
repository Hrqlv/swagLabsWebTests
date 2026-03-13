import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 100000,
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : 1,
  reporter: [['list', { printSteps: true }], ['html'],  ['pwmochawesome', { outputJSON: true, outputFileName: 'result.json' }], ['allure-playwright', { outputFolder: 'allure-results' }]],
  
  use: {
    video: 'on',
    screenshot: 'on',
    trace: 'on',
  },

  projects: [
    {
      name: 'chrome',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    {
      name: 'mobileChrome',
      use: { 
      browserName: 'chromium',  
      ...devices['iPhone 12'],
     },
    },
  ],
});