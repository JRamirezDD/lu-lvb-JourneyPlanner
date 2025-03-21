import { test, expect } from '@playwright/test';

test.describe('Performance of app', () => {
    test('should load control panel components quickly', async ({ page }) => {
        const startTime = Date.now();
        
        await page.goto('http://localhost:3000/lu-lvb-JourneyPlanner/en');
        
        const loadTime = Date.now() - startTime;
        expect(loadTime).toBeLessThan(2000); 
        
        await expect(page.getByRole('button', { name: 'Search Station' })).toBeVisible();

    });

    test('should handle view transitions efficiently', async ({ page }) => {
        await page.goto('http://localhost:3000/lu-lvb-JourneyPlanner/en');
        
        const startTime = Date.now();
        await page.getByRole('button', { name: 'Search Station' }).click();
        const transitionTime = Date.now() - startTime;
        expect(transitionTime).toBeLessThan(1000); 
        
        await expect(page.getByRole('textbox', { name: 'Enter a station name' })).toBeVisible();
    });

    test('should maintain performance during route planning', async ({ page }) => {
        await page.goto('http://localhost:3000/lu-lvb-JourneyPlanner/en');
        
        const startTime = Date.now();
        
        await page.getByRole('textbox', { name: 'Origin' }).click();
        await page.getByRole('textbox', { name: 'Origin' }).fill('Ha');
        await page.getByText('Leipzig, Hauptbahnhof (Tram/').click();

        await page.getByRole('textbox', { name: 'Destination' }).click();
        await page.getByRole('textbox', { name: 'Destination' }).fill('Witz');
        await page.getByText('Leipzig, Witzgallstr.').click();
        
        const searchStartTime = Date.now();
        await page.getByRole('button', { name: 'Search', exact: true }).click();
        const searchTime = Date.now() - searchStartTime;
        expect(searchTime).toBeLessThan(3000); 
        
        const routeStartTime = Date.now();
        await page.getByText('→').first().click();
        const routeTime = Date.now() - routeStartTime;
        expect(routeTime).toBeLessThan(3000); 

        await expect(page.getByText('Leipzig, Witzgallstr.')).toBeVisible();

    });

});
