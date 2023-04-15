/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "image.yes24.com",
        port: "",
        pathname: "/goods/**",
      },
    ],
  },
};

module.exports = nextConfig;
