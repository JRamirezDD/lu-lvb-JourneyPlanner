import type { NextConfig } from 'next';

const isVercel = process.env.NEXT_PUBLIC_DEPLOY_TARGET === "vercel";
const isGithubPages = process.env.NEXT_PUBLIC_DEPLOY_TARGET === "github-pages";


const nextConfig: NextConfig = {
    output: isGithubPages ? "export" : "standalone", /// export generates static pages, standalone generates server-side rendered pages (needed for routing proxy)
    images: {
        unoptimized: true // Needed for GitHub pages deployments
    },
    basePath: '/lu-lvb-JourneyPlanner',
    assetPrefix: '/lu-lvb-JourneyPlanner/',
    reactStrictMode: true,
    trailingSlash: false,
    env: {
        NEXT_PUBLIC_USE_MOCK: process.env.NEXT_PUBLIC_USE_MOCK,

        NEXT_PUBLIC_LVB_PROXY_ADDRESS: process.env.NEXT_PUBLIC_LVB_PROXY_ADDRESS,
        LVB_API_KEY: process.env.LVB_API_KEY,
        LVB_PROXY_ALLOWED_ORIGINS: process.env.LVB_PROXY_ALLOWED_ORIGINS,
        LVB_API_BASE_URL: process.env.LVB_API_BASE_URL,
        NEXT_PUBLIC_API_ENDPOINT_AUTOCOMPLETE: process.env.NEXT_PUBLIC_API_ENDPOINT_AUTOCOMPLETE,
        NEXT_PUBLIC_API_ENDPOINT_STOPMONITOR: process.env.NEXT_PUBLIC_API_ENDPOINT_STOPMONITOR,
        NEXT_PUBLIC_API_ENDPOINT_ROUTING: process.env.NEXT_PUBLIC_API_ENDPOINT_ROUTING,
        NEXT_PUBLIC_API_ENDPOINT_NEARBYSEARCH: process.env.NEXT_PUBLIC_API_ENDPOINT_NEARBYSEARCH,

        NEXT_PUBLIC_MAPBOX_PROXY_ADDRESS: process.env.NEXT_PUBLIC_MAPBOX_PROXY_ADDRESS,
        MAPBOX_ACCESS_TOKEN: process.env.MAPBOX_ACCESS_TOKEN,
        MAPBOX_PROXY_ALLOWED_ORIGINS: process.env.LVB_PROXY_ALLOWED_ORIGINS
    },
};

export default nextConfig;
