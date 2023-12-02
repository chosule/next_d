/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/products/deleted_forever",
        destination: "/products",
        permanent: true, //영원히 옮겨갔다고 말해줌
      },
      {
        source: "/products/deleted_temp",
        destination: "/products",
        permanent: false, //일시적으로 옮겨졌다고 서렂ㅇ
      },
    ];
  },
};

module.exports = nextConfig;
