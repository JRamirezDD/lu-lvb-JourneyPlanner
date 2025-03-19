import { test, expect } from '@playwright/test';

test.describe('ControlPanel Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/lu-lvb-JourneyPlanner/en'); // Adjust URL if needed
    await page.setViewportSize({ width: 1200, height: 800 }); // Ensure horizontal layout
  });

  test('should render RoutePlanner in DEFAULT view', async ({ page }) => {
    await expect(page.locator('text=Route Planner')).toBeVisible(); // Adjust locator based on RoutePlanner content
  });

  test('should switch to RouteView on PLAN view', async ({ page }) => {
    await page.locator('button:has-text("Plan Route")').click(); // Adjust selector based on your RoutePlanner button
    await expect(page.locator('text=Route View')).toBeVisible(); // Adjust locator based on RouteView content
  });

  test('should switch to SelectedRouteDetails on ITINERARY view', async ({ page }) => {
    // Simulate navigation to ITINERARY view (you may need to add a way to trigger this in your app)
    await page.evaluate(() => {
      window.localStorage.setItem('viewMode', 'ITINERARY');
    });
    await page.reload();
    await expect(page.locator('text=Selected Route Details')).toBeVisible(); // Adjust locator
  });

  test('should switch to SearchStation on SEARCH_STATION view', async ({ page }) => {
    await page.locator('button:has-text("Search Station")').click(); // Adjust selector based on your app
    await expect(page.locator('text=Search Station')).toBeVisible(); // Adjust locator
  });

  test('should switch to StationDetails on STATION view from map selection', async ({ page }) => {
    // Simulate map selection (you'll need to adjust this to match your map interaction)
    await page.evaluate(() => {
      // Simulate selecting a stop from the map
      const mockStop = {
        id: 'stop-123',
        name: 'Test Station',
        data: { stop_id: '123' }, // Mimic your Stop data
      };
      window.localStorage.setItem('selectedNearbySearchItem', JSON.stringify(mockStop));
      window.localStorage.setItem('viewMode', 'STATION');
    });
    await page.reload();
    await expect(page.locator('text=Test Station')).toBeVisible(); // Adjust based on StationDetails content
  });

    test('should switch to StationDetails on STATION view from search selection', async ({ page }) => {
        // Simulate search selection (you'll need to adjust this to match your search interaction)
        await page.evaluate(() => {
            const mockStop = {
                stop_id: '456',
                stop_name: 'Search Station',
            };
            window.localStorage.setItem('selectedStop', JSON.stringify(mockStop));
            window.localStorage.setItem('viewMode', 'STATION');
        });
        await page.reload();
        await expect(page.locator('text=Search Station')).toBeVisible();
    });

    test('should clear selections when navigating away from STATION view', async ({ page }) => {
        // Simulate map selection and STATION view
        await page.evaluate(() => {
            const mockStop = {
                id: 'stop-789',
                name: 'Map Station',
                data: { stop_id: '789' },
            };
            window.localStorage.setItem('selectedNearbySearchItem', JSON.stringify(mockStop));
            window.localStorage.setItem('viewMode', 'STATION');
        });
        await page.reload();

        // Navigate to DEFAULT view
        await page.evaluate(() => {
            window.localStorage.setItem('viewMode', 'DEFAULT');
        });
        await page.reload();

        // Verify selections are cleared (you may need to adjust this based on your app's behavior)
        const selectedNearbySearchItem = await page.evaluate(() => window.localStorage.getItem('selectedNearbySearchItem'));
        const selectedStop = await page.evaluate(() => window.localStorage.getItem('selectedStop'));
        const stableStopId = await page.evaluate(() => window.localStorage.getItem('stableStopId'));

        expect(selectedNearbySearchItem).toBeNull();
        expect(selectedStop).toBeNull();
        expect(stableStopId).toBeNull();
    });

    test('should use selectedStop when selectionSource is search', async ({ page }) => {
        await page.evaluate(() => {
            const mockStop = {
                stop_id: '999',
                stop_name: 'Search Result Station',
            };
            window.localStorage.setItem('selectedStop', JSON.stringify(mockStop));
            window.localStorage.setItem('viewMode', 'STATION');
        });
        await page.reload();
        await expect(page.locator('text=Search Result Station')).toBeVisible();
    });

    test('should use stableStopId when selectionSource is map', async ({ page }) => {
        await page.evaluate(() => {
            const mockStop = {
                id: 'stop-101',
                name: 'Map Result Station',
                data: { stop_id: '101' },
            };
            window.localStorage.setItem('selectedNearbySearchItem', JSON.stringify(mockStop));
            window.localStorage.setItem('viewMode', 'STATION');
        });
        await page.reload();
        await expect(page.locator('text=Map Result Station')).toBeVisible();
    });
});