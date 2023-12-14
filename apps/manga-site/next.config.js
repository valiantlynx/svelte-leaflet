/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
});

const nextConfig = {
    env: {
        key: process.env.COUNT_API_KEY,
        URL: "http://localhost:3001/api/",
        GA_MEASUREMENT_ID: "G-E1KHJ9LDW8",
    },
    images: {
        domains: [
            "gogocdn.net",
            "daisyui.com",
            "api.animevariant.org",
            "localhost:8080"
        ],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: '**.mpcdn.org',
            },
          ],
    },
    reactStrictMode: true,
    output: 'standalone',
}

module.exports = withPWA(nextConfig);
