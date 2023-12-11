/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/yeaung' : '',
  path: '/yeaung',
  images: { unoptimized: true }
}

module.exports = nextConfig