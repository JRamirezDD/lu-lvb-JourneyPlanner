import type { NextConfig } from 'next';

// const isVercel = process.env.NEXT_PUBLIC_DEPLOY_TARGET === "vercel";
const isVercel = false;

const nextConfig: NextConfig = {
    images: {
        unoptimized: true // Needed for GitHub pages deployments
    },
    basePath: '',
    assetPrefix: '/',
    reactStrictMode: true,
    trailingSlash: true,
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
    output: isVercel ? "standalone" : "export", // 🔹 "export" for GitHub Pages, "standalone" for Vercel
};

export default nextConfig;
