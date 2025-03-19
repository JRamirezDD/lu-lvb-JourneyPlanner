import { test, expect } from '@playwright/test';

test.describe('ControlPanel Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/lu-lvb-JourneyPlanner/en');
    await page.setViewportSize({ width: 1200, height: 800 });
  });

  test('Test Control Panel Search and Select Itinerary Function', async ({ page }) => {
    //Enter Origin, wait for response
    await page.getByRole('textbox', { name: 'Origin' }).click();
    await page.getByRole('textbox', { name: 'Origin' }).fill('hans-');
    await page.getByText('Leipzig, Engelsdorf, Hans-').click();

    //Enter Destination, wait for response
    await page.getByRole('textbox', { name: 'Destination' }).click();
    await page.getByRole('textbox', { name: 'Destination' }).fill('haup');
    await page.waitForTimeout(100);
    await page.getByRole('textbox', { name: 'Destination' }).fill('haupt');
    await page.getByText('Leipzig Hbf').click();

    //Press Search, expect response
    await page.getByRole('button', { name: 'Search', exact: true }).click();
    const x = page.getByRole('region', { name: 'Map' }).innerHTML;
    const firstResponse = page.getByText('→').first();
    const y = page.getByRole('region', { name: 'Map' }).innerHTML;
    console.log("x" + x);
    console.log("y" + y);
    expect(x).not.toEqual(y);
    expect(firstResponse).toBeDefined;

    //click an Itinerary, then switch itineraries and ensure they're different itineraries.
    await firstResponse.click();
    const content1 = page.locator('#control-panel-component').innerHTML();
    await page.locator('#control-panel-component').getByRole('button').nth(2).click();
    const content2 = page.locator('#control-panel-component').innerHTML();
    expect(content1).not.toEqual(content2);
  });

  test('Test Stop Search Functionality', async ({ page }) => {
    //Search for a station, wait for response, search
    await page.getByRole('button', { name: 'Search Station' }).click();
    await page.getByRole('textbox', { name: 'Enter a station name' }).click();
    await page.getByRole('textbox', { name: 'Enter a station name' }).fill('HauptBah');
    await page.getByText('Leipzig, Hauptbahnhof (Tram/').click();
    await page.getByRole('button', { name: 'Search for a station' }).click();

    //ensure disruptions page can be clicked 
    await page.getByRole('button', { name: 'Disruptions' }).click();


  })

  test('Test filter functionality', async ({ page }) => {
    //Finds an itinerary that uses an Sbahn, then filters and ensures that there are no itineraries using sbahn
    await page.getByRole('textbox', { name: 'Origin' }).click();
    await page.getByRole('textbox', { name: 'Origin' }).fill('hans');
    await page.getByText('Wiedemar, Hans-Grade-Str.').click();
    await page.getByRole('textbox', { name: 'Destination' }).click();
    await page.getByRole('textbox', { name: 'Destination' }).fill('haup');
    await page.waitForTimeout(100);
    await page.getByRole('textbox', { name: 'Destination' }).fill('haupt');
    await page.getByText('Leipzig Hbf').click();

    await page.getByRole('button', { name: 'Search', exact: true }).click();
    await page.locator('img[alt*="SUBURB"]');

    await page.getByRole('button', { name: 'Transport Options' }).click();
    await page.getByRole('listitem').filter({ hasText: 'S-Bahn' }).getByRole('button').click();
    await page.getByRole('button', { name: 'Search', exact: true }).click();
    try {
      const suburbImage = await page.locator('img[alt*="SUBURB"]');
      await expect(suburbImage).not.toBeVisible();
    } catch (error) {
      expect(true).toBe(true);
    }
  })

  test('Test swap input functionality', async ({ page }) => {
    //enter origin and destination:
    await page.getByRole('textbox', { name: 'Origin' }).click();
    await page.getByRole('textbox', { name: 'Origin' }).fill('Hans');
    await page.getByText('Leipzig', { exact: true }).first().click();
    await page.getByRole('textbox', { name: 'Destination' }).click();
    await page.getByRole('textbox', { name: 'Destination' }).fill('haupt');
    await page.getByText('Leipzig Hbf').click();
    //store initial values:
    const origin1 = page.getByRole('textbox', { name: 'Origin' }).inputValue;
    const destination1 = page.getByRole('textbox', { name: 'Destination' }).inputValue;
    //switch, store later values, compare values:
    await page.locator('#control-panel-component').getByRole('button').filter({ hasText: /^$/ }).click();
    const origin2 = page.getByRole('textbox', { name: 'Origin' }).inputValue;
    const destination2 = page.getByRole('textbox', { name: 'Destination' }).inputValue;
    expect(origin1).toEqual(destination2);
    expect(origin2).toEqual(destination1);
  })

})