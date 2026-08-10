import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfoliotemplate",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;