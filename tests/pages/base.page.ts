import { Page } from "@playwright/test";
import LoginPage from "./login.page";
import CompraPage from "./compra.page";
import dotenv from "dotenv";

dotenv.config();

export default class BasePage {
  readonly page: Page;
  readonly login: LoginPage;
  readonly compra: CompraPage;

  constructor(page: Page) {
    this.page = page;
    this.login = new LoginPage(page);
    this.compra = new CompraPage(page)
  }

  async irPara() {
    await this.page.goto(process.env.BASE_URL as string);
  }
}