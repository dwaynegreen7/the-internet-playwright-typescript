import { expect, Locator, Page } from '@playwright/test';

export class BasicAuthPage {
    readonly page: Page;
    readonly loginMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginMessage = page.locator('div[class="example"] p', );
    }

    gotoBasicAuthInURL() {
        this.page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');
    }


}