import { test, expect } from '@playwright/test';

test.describe('Performance of app', () => {
    test('should load control panel components quickly', async ({ page }) => {
        // Start performance measurement
        const startTime = Date.now();
        
        // Navigate to the application
        await page.goto('http://localhost:3000/lu-lvb-JourneyPlanner/en');
        
        // Measure initial load time
        const loadTime = Date.now() - startTime;
        expect(loadTime).toBeLessThan(2000); // Should load within 2 seconds
        
        // Verify all main components are visible
        await expect(page.getByRole('button', { name: 'Search Station' })).toBeVisible();

    });

    test('should handle view transitions efficiently', async ({ page }) => {
        await page.goto('http://localhost:3000/lu-lvb-JourneyPlanner/en');
        
        // Measure view transition time
        const startTime = Date.now();
        await page.getByRole('button', { name: 'Search Station' }).click();
        const transitionTime = Date.now() - startTime;
        expect(transitionTime).toBeLessThan(1000); // Should transition within 1000ms
        
        // Verify content is loaded
        await expect(page.getByRole('textbox', { name: 'Enter a station name' })).toBeVisible();
    });

    test('should maintain performance during route planning', async ({ page }) => {
        await page.goto('http://localhost:3000/lu-lvb-JourneyPlanner/en');
        
        // Measure route planning performance
        const startTime = Date.now();
        
        // Fill in route details
        await page.getByRole('textbox', { name: 'Origin' }).click();
        await page.getByRole('textbox', { name: 'Origin' }).fill('Ha');
        await page.getByText('Leipzig, Hauptbahnhof (Tram/').click();

        await page.getByRole('textbox', { name: 'Destination' }).click();
        await page.getByRole('textbox', { name: 'Destination' }).fill('Witz');
        await page.getByText('Leipzig, Witzgallstr.').click();
        
        // Click search and measure response time
        const searchStartTime = Date.now();
        await page.getByRole('button', { name: 'Search', exact: true }).click();
        const searchTime = Date.now() - searchStartTime;
        expect(searchTime).toBeLessThan(3000); // Should show routes within 3 seconds
        
        // Verify results are displayed
        const routeStartTime = Date.now();
        await page.getByText('→').first().click();
        const routeTime = Date.now() - routeStartTime;
        expect(routeTime).toBeLessThan(2000); // Should show routes within 2 second

        await expect(page.getByText('Leipzig, Witzgallstr.')).toBeVisible();

    });

});
