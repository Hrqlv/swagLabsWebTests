import { test } from '@playwright/test';
import BasePage from '../pages/base.page';

let basePage

test.describe('Fluxo de login @LOGIN @SWAGLABS', async () => {
  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    await basePage.irPara()
  })

  test.describe('[Objetivo do teste] Realizar fluxo de sucesso', async () => {

    test('[Cenário 1] ', async ({ page }) => {
      await test.step('[Caso de teste 1] ', async () => {
       
      })
    })
  
  })

  test.describe('[Objetivo do teste] Realizar fluxo de erro', async () => {

    test('[Cenário 1] ', async ({ page }) => {
      await test.step('[Caso de teste 1] ', async () => {
       
      })
    })
  })
})