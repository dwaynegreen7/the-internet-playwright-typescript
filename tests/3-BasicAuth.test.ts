import { test, expect } from '@playwright/test';
import { BasicAuthPage } from './pages/basicAuthPage';



test('Basic Auth', async ({ page }) => {
    const basicAuthPage = new BasicAuthPage(page);
    basicAuthPage.gotoBasicAuthInURL();
    const text = await basicAuthPage.loginMessage.textContent();

    expect(text).toContain('Congratulations');
});

//ToDo: Migrate username and password to a file instead of in the code and create helper method for basic auth page on page object
test('Basic Auth Tech', async ({ page }) => {
    const basicAuthPage = new BasicAuthPage(page);

    const username = 'admin';
    const password = 'admin';

    const base64credentials = Buffer.from(`${username}:${password}`).toString('base64');

    await page.route('/basic_auth', (route) => {
        const headers = {
            'Authorization':`Basic ${base64credentials}`,
        };
        route.continue({headers});

    });
    await page.goto('/basic_auth');
    const text = await basicAuthPage.loginMessage.textContent();
    expect(text).toContain('Congratulations');
});