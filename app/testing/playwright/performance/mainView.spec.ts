import { test, expect, Page } from '@playwright/test';
import { Scenario } from '@/testing/types/Scenario';

// measure heap memory usage
const getHeapUsageMB = async (page: Page) => {
  const heapSize = await page.evaluate(() => performance.memory.usedJSHeapSize);
  return heapSize / 1024 / 1024;
};

const scenarios = Object.values(Scenario) as Scenario[];

for (const scenario of scenarios) {
  test(`MainView memory performance - ${scenario}`, async ({ page }) => {
    // Load MainView with scenario via URL parameter
    await page.goto(`http://localhost:3000/lu-lvb-JourneyPlanner/test/scenarios?scenario=${scenario}`);

    // Allow UI and contexts to stabilize after scenario injection
    await page.waitForTimeout(5000); // 5 seconds (adjust as necessary)

    const memoryUsage: number[] = [];

    // Record memory usage every 10 seconds, total 3 minutes
    for (let i = 0; i < 18; i++) {
      const heapMB = await getHeapUsageMB(page);
      memoryUsage.push(heapMB);
      console.log(`[${scenario}] Heap at ${(i + 1) * 10}s: ${heapMB.toFixed(2)} MB`);
      await page.waitForTimeout(5000);
    }

    const memoryGrowth = memoryUsage[memoryUsage.length - 1] - memoryUsage[0];
    console.log(`[${scenario}] Total Memory Growth: ${memoryGrowth.toFixed(2)} MB`);

    // Assert memory growth is acceptable (< 10MB)
    expect(memoryGrowth).toBeLessThan(10);
  });
}
