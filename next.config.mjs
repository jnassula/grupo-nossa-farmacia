/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/grupo-nossa-farmacia" : "";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: isProd ? "/grupo-nossa-farmacia/" : "",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
