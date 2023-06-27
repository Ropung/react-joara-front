/** @type {import('next').NextConfig} */

const nextConfig = {
  // 깃허브 레포 이름
  // basePath: "/react-joara-front",
  reactStrictMode: false,
  images: {
    domains: ["cdn.myanimelist.net"],
    // FIXME 이미지 설정
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "cdn.myanimelist.net",
        port: "",
        pathname: "/r/100x140/images/*",
      },
    ],
  },
};

module.exports = nextConfig;
