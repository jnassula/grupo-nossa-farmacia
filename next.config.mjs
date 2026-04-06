/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/grupo-nossa-farmacia" : "",
  assetPrefix: isProd ? "/grupo-nossa-farmacia/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
