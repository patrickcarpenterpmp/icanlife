/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: false, // Keep ESLint during build for errors
  },
  images: {
    domains: ['images.unsplash.com'], // For hero images
  },
}

module.exports = nextConfig
