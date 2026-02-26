import { test } from '@playwright/test';
import BasePage from '../pages/base.page';

let basePage

test.describe('SignIn flow @SIGNIN @SWAGLABS', async () => {
  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    await basePage.goTo()
  })

  test.describe('[Objetivo do teste] Realize the positive success flow', async () => {

    test('[Scenario 1] ', async ({ page }) => {
      await test.step('[Test Case 1] ', async () => {
       
      })
    })
  
  })

  test.describe('[Objetivo do teste] Realize the negative flow / errors', async () => {

    test('[Scenario 1] ', async ({ page }) => {
      await test.step('[Test Case 1] ', async () => {
       
      })
    })
  })
})