import { test } from '@playwright/test';
import BasePage from '../pages/base.page';
import { login } from '../../fixtures/data';

let basePage:any

test.describe('Fluxo de compra @COMPRA @SWAGLABS', async () => {
  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    await basePage.irPara()
    await basePage.login.preencherCampos(login.nome, login.senha)
    await basePage.login.btnLogin()
  })

  test.describe('[Objetivo do teste] Adicionar produto ao carrinho', async () => {

    test('[Cenário 1] Escolher o produto', async ({ page }) => {
      await test.step('[Caso de teste 1] Escolher algum produto e clicar para adicionar ao carrinho', async () => {
        await basePage.compra.btnAdicionarProduto(0)
        await basePage.compra.btnAdicionarProduto(1)
      })

        await test.step('[Caso de teste 2] Validar a quantidade de produto adicionado', async () => {
        await basePage.compra.validarQtdProdutoAdicionado()
      })
    })

    test('[Cenário 2] Acessar mais detalhes do produto', async ({ page }) => {
      await test.step('[Caso de teste 1] Escolher algum produto e clicar para adicionar ao carrinho', async () => {
        await basePage.compra.btnAdicionarProduto(1)
      })

      await test.step('[Caso de teste 2] Acessar mais detalhes do produtos após adicionado', async () => {
        await basePage.compra.acessarMaisDetalhes(1)
      })

      await test.step('[Caso de teste 3] Validar os detalhes do produto', async () => {
       await basePage.compra.validarDetalhesProduto()
      })
    })

    test('[Cenário 3] Remover produto que já está adicionado', async ({ page }) => {
      await test.step('[Caso de teste 1] Escolher algum produto e clicar para adicionar ao carrinho', async () => {
        await basePage.compra.btnAdicionarProduto(3)
      })

      await test.step('[Caso de teste 2] Acessar mais detalhes do produtos após adicionado', async () => {
        await basePage.compra.acessarMaisDetalhes(3)
      })
      
      await test.step('[Caso de teste 3] Remover o produto caso queira', async () => {
        await basePage.compra.btnRemoverDetalhesProduto()
      })

      await test.step('[Caso de teste 4] Validar o produto pós removido', async () => {
        await basePage.compra.validarProdutoVazio()
      })

      await test.step('[Caso de teste 5] Voltar para lista de produtos', async () => {
        await basePage.compra.btnVoltarListaProdutos()
      })

      await test.step('[Caso de teste 6] Escolher algum produto e clicar para adicionar ao carrinho', async () => {
        await basePage.compra.btnAdicionarProduto(5)
      })

      await test.step('[Caso de teste 7] Remover o produto caso queira', async () => {
        await basePage.compra.btnRemoverProdutoPaginaInicial()
      })
      
      await test.step('[Caso de teste 8] Validar o produto pós removido', async () => {
        await basePage.compra.validarProdutoVazio()
      })
    })
  })
})