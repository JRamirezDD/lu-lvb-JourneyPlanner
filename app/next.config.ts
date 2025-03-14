import type { NextConfig } from 'next';
import { webpack } from 'next/dist/compiled/webpack/webpack';

const build_mode = process.env.BUILD_MODE;

const nextConfig: NextConfig = {
    output: build_mode === 'standalone' || build_mode === 'export' ? build_mode : undefined, /// export generates only static pages, standalone generates server-side rendered pages (needed for routing proxy)
    images: {
        unoptimized: true // Needed for GitHub pages deployments
    },
    basePath: '/lu-lvb-JourneyPlanner',
    assetPrefix: '/lu-lvb-JourneyPlanner/',
    reactStrictMode: true,
    trailingSlash: false, // ? not supported by GitHub Pages? Must be set to false.
    env: {
        NEXT_PUBLIC_BASE_PATH: '/lu-lvb-JourneyPlanner',

        NEXT_PUBLIC_USE_MOCK: process.env.NEXT_PUBLIC_USE_MOCK,

        NEXT_PUBLIC_LVB_PROXY_ADDRESS: process.env.NEXT_PUBLIC_LVB_PROXY_ADDRESS,
        LVB_API_KEY: process.env.LVB_API_KEY,
        LVB_PROXY_ALLOWED_ORIGINS: process.env.LVB_PROXY_ALLOWED_ORIGINS,
        LVB_API_BASE_URL: process.env.LVB_API_BASE_URL,
        NEXT_PUBLIC_API_ENDPOINT_AUTOCOMPLETE: process.env.NEXT_PUBLIC_API_ENDPOINT_AUTOCOMPLETE,
        NEXT_PUBLIC_API_ENDPOINT_STOPMONITOR: process.env.NEXT_PUBLIC_API_ENDPOINT_STOPMONITOR,
        NEXT_PUBLIC_API_ENDPOINT_ROUTING: process.env.NEXT_PUBLIC_API_ENDPOINT_ROUTING,
        NEXT_PUBLIC_API_ENDPOINT_NEARBYSEARCH: process.env.NEXT_PUBLIC_API_ENDPOINT_NEARBYSEARCH,
    },
};

export default nextConfig;
