/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/vejen',
  assetPrefix: '/vejen/',
};
module.exports = nextConfig;
