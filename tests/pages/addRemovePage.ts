import { Locator, Page } from '@playwright/test';

export class AddRemovePage {
    readonly page: Page;
    readonly addElementButton: Locator;
    readonly deleteButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.addElementButton = page.getByRole('button', { name: 'Add Element' });
        this.deleteButton = page.getByRole('button', { name: 'Delete' });
    }

    goto() {
        this.page.goto('/add_remove_elements/');
    }
}