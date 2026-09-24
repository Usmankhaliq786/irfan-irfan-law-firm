/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/justice-law-firm" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/justice-law-firm/" : "",
};

module.exports = nextConfig;
