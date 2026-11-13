import type { NextConfig } from "next";
import path from "node:path";

// Pin the project root. A stray ~/package-lock.json otherwise makes Next
// treat the home folder as the workspace root. (__dirname isn't available
// when Next loads this config as an ES module, so resolve from cwd — npm
// scripts always run from the package root.)
const root = path.resolve(process.cwd());

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: root,
  turbopack: { root },
};

export default nextConfig;
