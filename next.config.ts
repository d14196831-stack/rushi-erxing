import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isPagesBuild =
  process.env.npm_lifecycle_event === "build:pages" ||
  process.env.GITHUB_ACTIONS === "true";
const isGitHubProjectPage =
  isPagesBuild &&
  repositoryName.length > 0 &&
  !repositoryName.endsWith(".github.io");

const nextConfig: NextConfig = {
  ...(isPagesBuild ? { output: "export" as const } : {}),
  trailingSlash: true,
  basePath: isGitHubProjectPage ? `/${repositoryName}` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
