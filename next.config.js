/** @type {import('next').NextConfig} */
const REPO = 'Vejen'; // fx 'vejen'
const isPages = true;

const nextConfig = {
  output: 'export',            // giver statiske filer (krav til GitHub Pages)
  images: { unoptimized: true },
  basePath: isPages ? `/${REPO}` : '',
  assetPrefix: isPages ? `/${REPO}/` : ''
};

module.exports = nextConfig;
