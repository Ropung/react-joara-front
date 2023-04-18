/** @type {import('next').NextConfig} */

const nextConfig = {
  // 깃허브 레포 이름
  // basePath: "/react-joara-front",
  reactStrictMode: false,
  images: {
    // FIXME 이미지 설정
    // unoptimized: true,
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
