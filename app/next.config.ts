import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        unoptimized: true // Needed for GitHub pages deployments
    },
    basePath: '/lu-lvb-JourneyPlanner',
    assetPrefix: '/lu-lvb-JourneyPlanner/',
    reactStrictMode: true,
    env: {
        API_BASE_URL: process.env.API_BASE_URL,
        API_KEY: process.env.API_KEY,
        ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS,
    },
};

export default nextConfig;
