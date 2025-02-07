const createNextIntl = require('next-intl/plugin');

const withNextIntl = createNextIntl({
  defaultLocale: 'en', // Set your default language
  locales: ['en', 'de'], // Add all supported locales
  localeDetection: false, // Disables automatic cookie-based locale detection
});

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Needed for GitHub Pages
  },
  basePath: '/lu-lvb-JourneyPlanner',
  assetPrefix: '/lu-lvb-JourneyPlanner/',
};

export default withNextIntl(nextConfig);
