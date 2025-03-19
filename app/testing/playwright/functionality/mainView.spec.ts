import { test, expect } from '@playwright/test';

test.describe('MainView Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/lu-lvb-JourneyPlanner/en'); 
  });

  test('should render the MainView components', async ({ page }) => {
    await expect(page.locator('#map-component')).toBeHidden;
    await expect(page.locator('#control-panel-component')).toBeVisible();
  });

  test('should switch to vertical layout on smaller screens', async ({ page, viewport }) => {
    await page.setViewportSize({ width: 800, height: 600 }); // Simulate a smaller screen
    await page.waitForTimeout(100); // Allow time for layout change

    const container = page.locator('div').filter({ has: page.locator('#control-panel-component') }).first(); //find the container div.

    expect(container).toBeVisible;
  });

  test('should switch to horizontal layout on larger screens', async ({ page, viewport }) => {
    await page.setViewportSize({ width: 1200, height: 800 }); // Simulate a larger screen
    await page.waitForTimeout(100); // Allow time for layout change

    const container = page.locator('div').filter({ has: page.locator('#interaction-box') }).first(); //find the container div.

    expect(container).toBeVisible;
  });

  test('should expand and collapse the control panel in vertical layout', async ({ page, viewport }) => {
    await page.setViewportSize({ width: 800, height: 600 }); // Simulate a smaller screen
    await page.waitForTimeout(100);

    const initialHeight = await page.locator('#interaction-box').locator('..').getAttribute('style'); //get parent div style
    expect(initialHeight).toContain('150px');

    await page.locator('#interaction-box').dispatchEvent('mousedown');
    await page.mouse.move(0, 100); // Move down
    await page.mouse.up();
    await page.waitForTimeout(100);

    const expandedHeight = await page.locator('#interaction-box').locator('..').getAttribute('style');
    expect(expandedHeight).toContain('150px');

    await page.locator('#interaction-box').dispatchEvent('mousedown');
    await page.mouse.move(0, -100); // Move up
    await page.mouse.up();
    await page.waitForTimeout(100);

    const collapsedHeight = await page.locator('#interaction-box').locator('..').getAttribute('style');
    expect(collapsedHeight).toContain('150px');
  });

  test('should toggle control panel expansion on click', async({page, viewport})=>{
    await page.setViewportSize({ width: 800, height: 600 });
    await page.waitForTimeout(100);

    const initialHeight = await page.locator('#interaction-box').locator('..').getAttribute('style');
    expect(initialHeight).toContain('150px');

    await page.locator('#click-handle').click();

    const expandedHeight = await page.locator('#interaction-box').locator('..').getAttribute('style');
    expect(expandedHeight).toContain('500px');

    await page.locator('#click-handle').click();

    const collapsedHeight = await page.locator('#interaction-box').locator('..').getAttribute('style');
    expect(collapsedHeight).toContain('150px');
  });

  test('should have a drag handle visible in vertical mode', async ({ page, viewport }) => {
    await page.setViewportSize({ width: 800, height: 600 });
    await expect(page.locator('#interaction-box')).toBeVisible();
  });

  test('should not have a drag handle visible in horizontal mode', async ({ page, viewport }) => {
    await page.setViewportSize({ width: 1200, height: 800 });
    await expect(page.locator('#interaction-box')).not.toBeVisible();
  });
});