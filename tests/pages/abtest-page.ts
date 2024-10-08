import { Locator, Page } from '@playwright/test';

export class ABTestPage {
    readonly page: Page;
    readonly heading: Locator;


    constructor(page: Page) {
        this.page = page;
        this.heading = page.getByRole('heading');
    }
}