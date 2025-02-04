const createNextIntl = require('next-intl/plugin');
const withNextIntl = createNextIntl();

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here*/
};

export default withNextIntl(nextConfig);
