/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['media.api-sports.io'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig