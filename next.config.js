/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // laver statiske filer til Pages
  images: { unoptimized: true },
  basePath: '/vejen',         // sti = dit repo-navn (små bogstaver)
  assetPrefix: '/vejen/'
};
module.exports = nextConfig;
