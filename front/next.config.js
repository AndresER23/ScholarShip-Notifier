/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'web.icetex.gov.co'
      }
    ]
  }
}

module.exports = nextConfig
