/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/backend/:path*',
        destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}/:path*`,
      },
      {
        source: '/local/:path*',
        destination: `${process.env.NEXT_PUBLIC_LOCAL_URL}/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
