/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
}

// Only use PWA in non-export mode (for development)
if (process.env.NODE_ENV !== 'production' || process.env.ENABLE_PWA === 'true') {
  const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development'
  })
  module.exports = withPWA(nextConfig)
} else {
  module.exports = nextConfig
}

