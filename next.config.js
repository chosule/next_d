/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: "/products/deleted_forever",
        destination: "/products",
        //영원히 여기로 옮겨갔음
        permanent: true,
      },
      {
        source: "/products/deleted_temp",
        destination: "/products",
        // false는 일시적으로 옮겨진다는걸 명시
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
