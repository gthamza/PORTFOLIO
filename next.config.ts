import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during build
  },
  reactStrictMode: true, // Keep React strict mode enabled
  // swcMinify: true, // Enable SWC minification for better performance
  images: {
    domains: ["yourdomain.com"], // Add any image domains you use
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default withSentryConfig(nextConfig, {
  org: "gt-ib",
  project: "javascript-nextjs",
  silent: !process.env.CI, // Reduce logs in CI builds
  widenClientFileUpload: true, // Upload full source maps for better stack traces
  reactComponentAnnotation: { enabled: true }, // Annotate React components for better debugging
  hideSourceMaps: true, // Hide source maps from production
  disableLogger: true, // Reduce bundle size by removing Sentry logs
  automaticVercelMonitors: true, // Enable automatic instrumentation for Vercel Cron jobs
});
