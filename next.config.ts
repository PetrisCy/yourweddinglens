import type { NextConfig } from "next";

const githubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  ...(githubPages ? {
    output: "export",
    trailingSlash: true,
    images: { unoptimized: true },
  } : {}),
};

export default nextConfig;
