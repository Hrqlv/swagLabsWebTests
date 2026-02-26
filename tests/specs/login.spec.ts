import { test } from '@playwright/test';
import BasePage from '../pages/base.page';
import { login } from '../../fixtures/data';

let basePage:any

test.describe('Fluxo de login @LOGIN @SWAGLABS', async () => {
  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    await basePage.irPara()
  })

  test.describe('[Objetivo do teste] Realizar fluxo de sucesso', async () => {

    test('[Cenário 1] Login com credenciais válidas', async ({ page }) => {
      await test.step('[Caso de teste 1] Inserir o email e a senha', async () => {
        await basePage.login.preencherCampos(login.nome, login.senha)
      })

      await test.step('[Caso de teste 2] Clicar no botao para realizar o login', async () => {
        await basePage.login.btnLogin()
      })
    })
  })

  test.describe('[Objetivo do teste] Realizar fluxo de erro', async () => {

    test('[Cenário 1] Login com senha inválida', async ({ page }) => {
      await test.step('[Caso de teste 1] Inserir a senha errada', async () => {
       await basePage.login.preencherCampos(login.nome, "secret_sauc")
      })

      await test.step('[Caso de teste 2] Clicar no botao para realizar o login', async () => {
       await basePage.login.btnLogin()
      })

      await test.step('[Caso de teste 3] Validar a mensagem de erro', async () => {
       await basePage.login.mensagemErro('Username and password do not match any user in this service')
      })
    })

    test('[Cenário 2] Login com nome inválido', async ({ page }) => {
      await test.step('[Caso de teste 1] Inserir o nome errado', async () => {
       await basePage.login.preencherCampos('standard_userr', login.senha)
      })

      await test.step('[Caso de teste 2] Clicar no botao para realizar o login', async () => {
       await basePage.login.btnLogin()
      })

      await test.step('[Caso de teste 3] Validar a mensagem de erro', async () => {
       await basePage.login.mensagemErro('Username and password do not match any user in this service')
      })
    })

    test('[Cenário 3] Login com campos vazios', async ({ page }) => {
      await test.step('[Caso de teste 1] Clicar no botao para realizar o login', async () => {
       await basePage.login.btnLogin()
      })

      await test.step('[Caso de teste 2] Validar a mensagem de erro', async () => {
       await basePage.login.mensagemErro('Username is required')
      })
    })
  })
})