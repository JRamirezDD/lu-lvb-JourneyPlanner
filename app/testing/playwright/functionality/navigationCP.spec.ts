import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/lu-lvb-JourneyPlanner/en');
});

test.describe('Navigation Control Panel', () => {
    test('Search Station', async ({ page }) => {
        await page.getByRole('button', { name: 'Search Station' }).click();
        await page.waitForLoadState('load');
        await page.getByRole('textbox', { name: 'Enter a station name' }).click();
        await page.getByRole('textbox', { name: 'Enter a station name' }).fill('Ha');
        await page.waitForLoadState('load');
        await page.getByText('Leipzig Hbf').click();

        await page.getByRole('button', { name: 'Search for a station' }).click();
        await page.waitForLoadState('load');

        await expect(page.getByText('Leipzig Hbf')).toBeVisible();
    });

    test('Modify departure', async ({ page }) => {
       
        await page.getByRole('button', { name: 'Depart Now' }).click();
        await page.getByRole('button', { name: 'Increment hour' }).click();
        await page.getByRole('button', { name: 'Increment hour' }).click();
        await page.getByRole('button', { name: 'Arrival' }).click();
        await page.getByRole('button', { name: '20' }).click();
        await page.getByRole('textbox', { name: 'Origin' }).click();
        await page.getByRole('button', { name: 'Now' }).click();
        await expect(page.getByRole('button', { name: /Arrival at/ })).toBeVisible();
    });

    test('Modify Transport mode', async ({ page }) => {

        await page.getByRole('button', { name: 'Transport Options' }).click();
        await page.getByRole('listitem').filter({ hasText: 'Less Transfers' }).getByRole('button').click();
        await page.getByRole('listitem').filter({ hasText: 'Minimal Walking' }).getByRole('button').click();
        await page.getByRole('listitem').filter({ hasText: 'Tram' }).getByRole('button').click();

        await expect(page.getByText('Less Transfers')).toBeVisible();
        await expect(page.getByText('Minimal Walking')).toBeVisible();
        await expect(page.getByText('Tram')).toBeVisible();
    });

    test('Search for a journey', async ({ page }) => {
        await page.getByRole('textbox', { name: 'Origin' }).click();
        await page.getByRole('textbox', { name: 'Origin' }).fill('Witz');
        await page.getByText('Leipzig, Witzgallstr.').click();

        await page.getByRole('textbox', { name: 'Destination' }).click();
        await page.getByRole('textbox', { name: 'Destination' }).fill('Ha');
        await page.getByText('Leipzig, Hauptbahnhof (Tram/').click();
        
        await page.getByRole('button', { name: 'Search', exact: true }).click();
        await page.getByText('→').first().click();

        await expect(page.getByText('Leipzig, Hauptbahnhof (Tram/')).toBeVisible();
    });
});

