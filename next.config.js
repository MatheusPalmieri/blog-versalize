/** @type {import('next').NextConfig} */
const nextConfig = {
  pagesDir: 'src',
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
