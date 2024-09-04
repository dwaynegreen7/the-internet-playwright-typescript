import { test, expect } from '@playwright/test';

//These tests fail because the page contains broken images
//I learned about toHaveJSProperty from a Playwright Issue: https://github.com/microsoft/playwright/issues/6046
//This issue could also help with a page that has a lot of images and needs to be lazy loaded by scrolling
test.fail()

test('Find Broken Images using naturalWidth', async ({ page }) => {
    await page.goto('/broken_images');

    const imgs = await page.getByRole('img').all();
    
    for await (const img of imgs) {
        const imageSource = await img.getAttribute('src');
        expect.soft(imageSource?.length).toBeGreaterThan(0);
        expect.soft(img, 'Failed to find image for: ' + imageSource).not.toHaveJSProperty('naturalWidth', 0);
    }
});

test('Find Broken Images using network request', async ({ page }) => {
    await page.goto('/broken_images');

    const imgs = await page.getByRole('img').all();
    
    for await (const img of imgs) {
        const imageSource = await img.getAttribute('src');
        expect.soft(imageSource?.length).toBeGreaterThan(0);
        const networkResult = page.request.get('https://the-internet.herokuapp.com/broken_images' + imageSource);
        expect.soft(networkResult, 'Failed to find image for: ' + imageSource).toBe(200);
    }
});

