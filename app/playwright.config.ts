import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './testing/playwright', // Test files location
  testMatch: '**/*.spec.ts', // Run only *.spec.ts files
  timeout: 300000, // Max test duration (5 minutes)
  retries: 0,
  workers: 1, // one test at a time (stable memory measurements)
  use: {
    browserName: 'chromium',
    viewport: { width: 1280, height: 720 },
    launchOptions: {
      args: ['--enable-precise-memory-info'], // enables accurate memory measurement
    },
  },
});
