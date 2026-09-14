import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Il progetto vive in una sottocartella del monorepo rec.group:
  // ancoriamo Turbopack qui per evitare che risalga al lockfile del repo.
  turbopack: { root: path.resolve(process.cwd()) },
};

export default nextConfig;
