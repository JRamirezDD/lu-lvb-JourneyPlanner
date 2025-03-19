import { test, expect } from '@playwright/test';

test('Whole navigation of control panel.', async ({ page }) => {
  await page.goto('http://localhost:3000/lu-lvb-JourneyPlanner/en');

  // wait  to load the page
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: 'Search Station' }).click();

  // wait  to load the page
  await page.waitForLoadState('load');
  await page.getByRole('textbox', { name: 'Enter a station name' }).click();

  // wait  to load the page
  await page.waitForLoadState('load');
  await page.getByRole('textbox', { name: 'Enter a station name' }).fill('Ha');

  // wait  to load the page
  await page.waitForLoadState('load');
  await page.getByText('Leipzig Hbf').click();

  // wait  to load the page
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: 'Search for a station' }).click();

  // wait  to load the page
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: 'Disruptions' }).click();

  // wait  to load the page
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: 'Right Now' }).click();

  // wait  to load the page
  await page.waitForLoadState('load');
  await page.locator('#control-panel-component').getByRole('button').filter({ hasText: /^$/ }).click();

  // wait  to load the page
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: 'Depart Now' }).click();

  // wait  to load the page
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: 'Increment hour' }).click();

  // wait  to load the page
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: 'Now' }).click();

  // wait  to load the page
  await page.waitForLoadState('load');
  await page.getByRole('textbox', { name: 'Origin' }).click();

  // wait  to load the page
  await page.waitForLoadState('load');
  await page.getByRole('textbox', { name: 'Origin' }).fill('Lei');

  // wait  to load the page
  await page.waitForLoadState('load');
  await page.getByText('Leipzig, Bayerischer Bahnhof').click();

  // wait  to load the page
  await page.waitForLoadState('load');
  await page.getByRole('textbox', { name: 'Destination' }).click();

  // wait  to load the page
  await page.waitForLoadState('load');
  await page.getByRole('textbox', { name: 'Destination' }).fill('Cosp');

  // wait  to load the page
  await page.waitForLoadState('load');
  await page.getByText('Leipzig, Cospudener See/EXPO-').click();

  // wait  to load the page
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: 'Depart at 15:' }).click();
  await page.getByRole('button', { name: 'Search', exact: true }).click();

  // wait  to load the page
  await page.waitForLoadState('load');
  await page.getByText('S6765').first().click();

  // wait  to load the page
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: '3 stops' }).click();

  // wait  to load the page
  await page.waitForLoadState('load');
  await page.locator('div').filter({ hasText: /^1 \/ 5$/ }).getByRole('button').nth(2).click();
});