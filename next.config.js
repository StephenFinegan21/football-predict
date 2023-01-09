/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['media-1.api-sports.io', 'media.api-sports.io', 'media-2.api-sports.io',  'media-3.api-sports.io'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig