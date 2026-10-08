import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Static export: `npm run build` writes a plain HTML/CSS/JS site to `out/`.
  output: "export",
  // No image optimization server in a static export.
  images: { unoptimized: true },
  turbopack: {
    // Pin the project root (a stray package-lock.json in the home folder confuses detection).
    root: path.resolve(__dirname),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
