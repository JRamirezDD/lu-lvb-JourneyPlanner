import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    output: "export",
    images: {
        unoptimized: true // Needed for GitHub pages deployments
    },
    basePath: '/lu-lvb-JourneyPlanner',
    assetPrefix: '/lu-lvb-JourneyPlanner/',
};

export default nextConfig;
