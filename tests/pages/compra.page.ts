import { expect, type Page } from '@playwright/test';

export default class CompraPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async btnAdicionarProduto(indice: number) {
       await this.page.locator('button').filter({ hasText: 'Add to cart' }).nth(indice).click()
    }

    async btnRemoverDetalhesProduto() {
        await this.page.locator('button[id="remove"]').click()
    }

    async btnRemoverProdutoPaginaInicial() {
        await this.page.locator('button[id*="remove"]').click()
    }

    async btnVoltarListaProdutos() {
        await this.page.locator('button[id="back-to-products"]').click()
    }

    async btnContinuarComprando() {
        await this.page.locator('button[id="continue-shopping"]').click()
    }
   
    async acessarMaisDetalhes(indice: number) {
        await this.page.locator('div[class="inventory_item_name "]').nth(indice).click({ force: true })
    }

    async acessarCarrinhoCompra() {
        await this.page.locator('a[data-test="shopping-cart-link"]').click()
    }

    async validarQtdProdutoAdicionado() {
        await expect(this.page.locator('span[class="shopping_cart_badge"]')).toBeVisible({ timeout: 3000 })
    }

    async validarProdutoVazio() {
        await expect(this.page.locator('a[data-test="shopping-cart-link"]')).toBeVisible({ timeout: 3000 })
    }

    async validarDetalhesProdutoPaginaInicial() {
        await expect(this.page.locator('div[class="inventory_details_name large_size"]')).toBeVisible({ timeout: 3000 })
        await expect(this.page.locator('div[class="inventory_details_desc large_size"]')).toBeVisible({ timeout: 3000 })
        await expect(this.page.locator('div[class="inventory_details_price"]')).toBeVisible({ timeout: 3000 })
    }

    async validarDetalhesProdutoCarrinho() {
        await expect(this.page.locator('div[data-test="inventory-item-name"]')).toBeVisible({ timeout: 3000 })
        await expect(this.page.locator('div[data-test="inventory-item-desc"]')).toBeVisible({ timeout: 3000 })
        await expect(this.page.locator('div[data-test="inventory-item-price"]')).toBeVisible({ timeout: 3000 })
    }
}