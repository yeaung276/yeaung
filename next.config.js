/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  assetPrefix: '/yeaung', // process.env.NODE_ENV === 'production' ? '/yeaung' : '',
  images: { unoptimized: true }
}

module.exports = nextConfig
