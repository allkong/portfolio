import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: { typescript: true, ext: 'tsx' },
          },
        ],
        as: '*.js',
      },
    },
    resolveExtensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },

  webpack: (config) => {
    // @ts-expect-error 타입 에러 무시
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

    if (fileLoaderRule) {
      config.module.rules.push(
        { ...fileLoaderRule, test: /\.svg$/i, resourceQuery: /url/ },
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
          use: [
            {
              loader: '@svgr/webpack',
              options: { typescript: true, ext: 'tsx' },
            },
          ],
        },
      );
      fileLoaderRule.exclude = /\.svg$/i;
    } else {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] },
        use: [{ loader: '@svgr/webpack', options: { typescript: true } }],
      });
    }

    return config;
  },
};

export default nextConfig;
