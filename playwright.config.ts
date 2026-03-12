import { defineConfig, devices } from '@playwright/test';

const envCI = process.env.CI?.toLocaleLowerCase() === 'true';

export default defineConfig({
  timeout: 100000,
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: envCI ? 2 : 0,
  workers: envCI ? 3 : 0,
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