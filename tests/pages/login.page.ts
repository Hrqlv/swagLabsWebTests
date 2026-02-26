import { expect, type Page } from '@playwright/test';

export default class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async preencherCampos(nome = '', senha = '') {
        await this.page.locator('input[id="user-name"]').fill(nome)
        await this.page.waitForTimeout(1500)
        await this.page.locator('input[id="password"]').fill(senha)
        await this.page.waitForTimeout(1500)
    }

    async btnLogin() {
        await this.page.locator('input[id="login-button"]').click()
    }

    async mensagemErro(texto = '') {
        await expect(this.page.locator('div[class="error-message-container error"] h3').filter({ hasText: texto })).toBeVisible({ timeout: 3000 })
    }

}