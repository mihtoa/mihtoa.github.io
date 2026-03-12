import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig: NextConfig = {
  assetPrefix: basePath,
  basePath,
  output: 'export',
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
