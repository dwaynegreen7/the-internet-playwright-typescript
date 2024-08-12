import { test, expect } from 'playwright/test';
import { ABTestPage } from './pages/abtest-page';


test('A/B Test Manual', async({ page }) => {
    const aBTestPage = new ABTestPage(page);     
    
    await page.goto('/abtest_manual');

    await expect(aBTestPage.heading).toHaveText('A/B Test Manual');
});

test('A/B Test Cookies', async({ page }) => {
    const aBTestPage = new ABTestPage(page);
    
    await page.goto('/abtest_cookies');

    await expect(aBTestPage.heading).toHaveText('A/B Test Cookies');
});

//This test needs more work - it's currently hard to discover which variation has been 
//assigned at page load. It looks like optimizely is the one assigning the variation, but more
//work should be done here to discover which variation is assigned and then test for that variation
test('A/B Test', async({ page }) => {
    const aBTestPage = new ABTestPage(page);
    
    await page.goto('/abtest');

    await expect(aBTestPage.heading).toContainText('A/B Test');
});

