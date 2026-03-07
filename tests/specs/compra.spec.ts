import { test } from '@playwright/test';
import BasePage from '../pages/base.page';
import { login } from '../../fixtures/data';
import { dadosCheckout } from '../../support/helpers';

let basePage:any
let comprador = dadosCheckout()

test.describe('Fluxo de compra @COMPRA @SWAGLABS', async () => {
  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    await basePage.irPara()
    await basePage.login.preencherCampos(login.nome, login.senha)
    await basePage.login.btnLogin()
  })

  test.describe('[Objetivo do teste] Gerenciar produtos no carrinho', async () => {

    test('[Cenário 1] Adicionar produtos ao carrinho', async ({ page }) => {
      await test.step('[Caso de teste 1] Adicionar produtos ao carrinho', async () => {
        await basePage.compra.btnAdicionarProduto(0)
        await basePage.compra.btnAdicionarProduto(1)
      })

      await test.step('[Caso de teste 2] Validar quantidade de produtos no carrinho', async () => {
        await basePage.compra.validarQtdProdutoAdicionado()
      })
    })

    test('[Cenário 2] Visualizar detalhes do produto', async ({ page }) => {
      await test.step('[Caso de teste 1] Adicionar produto ao carrinho', async () => {
        await basePage.compra.btnAdicionarProduto(1)
      })

      await test.step('[Caso de teste 2] Acessar detalhes do produto', async () => {
        await basePage.compra.acessarMaisDetalhes(1)
      })

      await test.step('[Caso de teste 3] Validar informações do produto', async () => {
       await basePage.compra.validarDetalhesProdutoPaginaInicial()
      })
    })

    test('[Cenário 3] Remover produto do carrinho', async ({ page }) => {
      await test.step('[Caso de teste 1] Adicionar produto ao carrinho', async () => {
        await basePage.compra.btnAdicionarProduto(3)
      })

      await test.step('[Caso de teste 2] Acessar detalhes do produto', async () => {
        await basePage.compra.acessarMaisDetalhes(3)
      })
      
      await test.step('[Caso de teste 3] Remover produto do carrinho', async () => {
        await basePage.compra.btnRemoverDetalhesProduto()
      })

      await test.step('[Caso de teste 4] Validar carrinho vazio', async () => {
        await basePage.compra.validarProdutoVazio()
      })

      await test.step('[Caso de teste 5] Voltar para lista de produtos', async () => {
        await basePage.compra.btnVoltarListaProdutos()
      })

      await test.step('[Caso de teste 6] Adicionar outro produto ao carrinho', async () => {
        await basePage.compra.btnAdicionarProduto(5)
      })

      await test.step('[Caso de teste 7] Remover produto pela página inicial', async () => {
        await basePage.compra.btnRemoverProdutoPaginaInicial()
      })
      
      await test.step('[Caso de teste 8] Validar carrinho vazio', async () => {
        await basePage.compra.validarProdutoVazio()
      })
    })

    test('[Cenário 4] Acessar carrinho de compras', async ({ page }) => {
      await test.step('[Caso de teste 1] Adicionar produto ao carrinho', async () => {
        await basePage.compra.btnAdicionarProduto(3)
      })

      await test.step('[Caso de teste 2] Acessar carrinho de compras', async () => {
        await basePage.compra.acessarCarrinhoCompra()
      })

      await test.step('[Caso de teste 3] Validar detalhes do produto no carrinho', async () => {
        await basePage.compra.validarDetalhesProdutoCarrinho()
      })

      await test.step('[Caso de teste 4] Remover produto do carrinho', async () => {
        await basePage.compra.btnRemoverProdutoPaginaInicial()
      })

      await test.step('[Caso de teste 5] Continuar comprando', async () => {
        await basePage.compra.btnContinuarComprando()
      })
    })
  })

  test.describe('[Objetivo do teste] Finalizar compra', async () => {
     test('[Cenário 1] Finalizar compra com sucesso', async ({ page }) => {
      await test.step('[Caso de teste 1] Adicionar produto ao carrinho', async () => {
        await basePage.compra.btnAdicionarProduto(0)
      })

      await test.step('[Caso de teste 2] Validar quantidade de produtos no carrinho', async () => {
        await basePage.compra.validarQtdProdutoAdicionado()
      })

      await test.step('[Caso de teste 3] Acessar carrinho de compras', async () => {
        await basePage.compra.acessarCarrinhoCompra()
      })

      await test.step('[Caso de teste 4] Validar detalhes do produto no carrinho', async () => {
        await basePage.compra.validarDetalhesProdutoCarrinho()
      })

      await test.step('[Caso de teste 5] Clicar em checkout', async () => {
        await basePage.compra.btnCheckout()
      })

      await test.step('[Caso de teste 6] Preencher informações do comprador', async () => {
        await basePage.compra.formPreencherSuasInfo(comprador.primeiroNome, comprador.segundoNome,  comprador.cep)
      })

      await test.step('[Caso de teste 7] Continuar para revisão da compra', async () => {
        await basePage.compra.btnContinuar()
      })

      await test.step('[Caso de teste 8] Validar resumo do pedido', async () => {
        await basePage.compra.validarDetalhesProdutoCarrinho()
      })

      await test.step('[Caso de teste 9] Finalizar compra', async () => {
        await basePage.compra.btnFinalizar()
      })

      await test.step('[Caso de teste 10] Validar mensagem de confirmação da compra', async () => {
        await basePage.compra.validarMensagemFinal()
      })
    })
  }) 
})