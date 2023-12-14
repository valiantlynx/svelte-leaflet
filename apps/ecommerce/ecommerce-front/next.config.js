/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    PUBLIC_URL: 'http://localhost:3001',
    FEATURED_PRODUCT_ID: '643b2bef29db0a19c0359068',
    FEATURED_PRODUCT_IMAGE: 'https://dawid-next-ecommerce.s3.amazonaws.com/1679151719649.png',
  },
}

module.exports = nextConfig
