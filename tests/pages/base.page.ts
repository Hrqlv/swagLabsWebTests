import { Page } from "@playwright/test";
import SignInPage from "./signIn.page";
import dotenv from "dotenv";

dotenv.config();

export default class BasePage {
  readonly page: Page;
  readonly signin: SignInPage;

  constructor(page: Page) {
    this.page = page;
    this.signin = new SignInPage(page);
  }

  async goTo() {
    await this.page.goto(process.env.BASE_URL as string);
  }
}