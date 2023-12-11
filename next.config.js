/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix: process.env.NODE_ENV === "production" ? "/yeaung" : "",
  images: {
    unoptimized: true,
    path: process.env.NODE_ENV === "production" ? "/yeaung" : "",
  },
};

module.exports = nextConfig;
