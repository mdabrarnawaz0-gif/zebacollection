/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",          // fully static HTML: fastest possible load + best crawlability
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
};
export default nextConfig;
