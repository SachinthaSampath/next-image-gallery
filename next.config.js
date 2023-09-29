/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "plush.unsplash.com"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
