import type { NextConfig } from 'next';
import { withSentryConfig } from '@sentry/nextjs/config';
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

// Only apply Sentry config if auth token is provided (for CI/CD)
const sentryAuthToken = process.env.SENTRY_AUTH_TOKEN;
const sentryOrg = process.env.SENTRY_ORG;
const sentryProject = process.env.SENTRY_PROJECT;

let finalConfig: NextConfig = withBundleAnalyzer(nextConfig);

if (sentryAuthToken && sentryOrg && sentryProject) {
  finalConfig = withSentryConfig(finalConfig, {
    org: sentryOrg,
    project: sentryProject,
    authToken: sentryAuthToken,
    silent: false,
    widenClientFileUpload: true,
    tunnelRoute: '/monitoring',
    sourcemaps: {
      disable: false,
    },
  });
}

export default finalConfig;