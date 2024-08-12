import { test, expect } from '@playwright/test';
import { AddRemovePage } from './pages/addRemovePage'; 

test('Add and Remove one element', async ({page}) => {
    const addRemovePage = new AddRemovePage(page);
    await addRemovePage.goto();

    await page.getByRole('button', { name: 'Add Element' }).click();

    expect(addRemovePage.deleteButton).toBeVisible();
    
    await addRemovePage.deleteButton.click();

    await expect(addRemovePage.deleteButton).toHaveCount(0);
    
});

test.skip('Add and Remove multiple elements in order of how they are added', async ({page}) => {
    test.setTimeout(1000000);
    const addRemovePage = new AddRemovePage(page);
    await addRemovePage.goto();

    for (var i = 0; i < 1000; i++) {
        await addRemovePage.addElementButton.click();
    }

    for (var i = 0; i < 1000; i++) {
        await addRemovePage.deleteButton.last().click();
    }
});

test.skip('Add and Remove multiple elements from beginning of how they are added', async ({page}) => {
    test.setTimeout(1000000);
    const addRemovePage = new AddRemovePage(page);
    await addRemovePage.goto();

    for (var i = 0; i < 1000; i++) {
        await addRemovePage.addElementButton.click();
    }

    for (var i = 0; i < 1000; i++) {
        await addRemovePage.deleteButton.first().click();
    }
});

test.skip('Add 5000 elements and verify count', async ({page}) => {
    test.setTimeout(1200000);
    const addRemovePage = new AddRemovePage(page);
    await addRemovePage.goto();

    for (var i = 0; i < 5000; i++) {
        await addRemovePage.addElementButton.click();
    }

    const elementCount = await addRemovePage.deleteButton.count();
    expect(elementCount).toEqual(5000);
});