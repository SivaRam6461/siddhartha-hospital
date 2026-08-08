/** @type {import('next').NextConfig} */

// Repository name — used as the base path so assets resolve correctly
// when the site is served from https://<user>.github.io/<repo>/
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/siddhartha-hospital";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath,
  assetPrefix: `${basePath}/`,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  },
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;