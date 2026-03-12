import { test } from '@playwright/test';
import BasePage from '../pages/base.page';
import { login } from '../../fixtures/data';

let basePage:any

test.describe('Fluxo de login @LOGIN @SWAGLABS @CI', async () => {
  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    await basePage.irPara()
  })

  test.describe('[Objetivo do teste] Realizar fluxo de sucesso', async () => {

    test('[Cenário 1] Login com credenciais válidas', async ({ page }) => {
      await test.step('[Caso de teste 1] Preencher usuário e senha válidos', async () => {
        await basePage.login.preencherCampos(login.nome, login.senha)
      })

      await test.step('[Caso de teste 2] Clicar no botão de login', async () => {
        await basePage.login.btnLogin()
      })
    })
  })

  test.describe('[Objetivo do teste] Realizar fluxo de erro', async () => {

    test('[Cenário 1] Login com senha inválida', async ({ page }) => {
      await test.step('[Caso de teste 1] Preencher usuário válido e senha inválida', async () => {
       await basePage.login.preencherCampos(login.nome, "secret_sauc")
      })

      await test.step('[Caso de teste 2] Clicar no botão de login', async () => {
       await basePage.login.btnLogin()
      })

      await test.step('[Caso de teste 3] Validar mensagem de erro de autenticação', async () => {
       await basePage.login.mensagemErro('Username and password do not match any user in this service')
      })
    })

    test('[Cenário 2] Login com usuario inválido', async ({ page }) => {
      await test.step('[Caso de teste 1] Preencher usuário inválido e senha válida', async () => {
       await basePage.login.preencherCampos('standard_userr', login.senha)
      })

      await test.step('[Caso de teste 2] Clicar no botão de login', async () => {
       await basePage.login.btnLogin()
      })

      await test.step('[Caso de teste 3] Validar mensagem de erro de autenticação', async () => {
       await basePage.login.mensagemErro('Username and password do not match any user in this service')
      })
    })

    test('[Cenário 3] Login com campos vazios', async ({ page }) => {
      await test.step('[Caso de teste 1] Clicar no botão de login sem preencher os campos', async () => {
       await basePage.login.btnLogin()
      })

      await test.step('[Caso de teste 2] Validar mensagem de campos obrigatórios', async () => {
       await basePage.login.mensagemErro('Username is required')
      })
    })
  })
})