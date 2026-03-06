import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/mihtoa.github.io' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/mihtoa.github.io' : '',
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
