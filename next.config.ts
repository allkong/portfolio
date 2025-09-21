import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [{ loader: '@svgr/webpack', options: { typescript: true } }],
        as: '*.js',
      },
    },
    resolveExtensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },

  webpack: (config) => {
    const assetRule = config.module.rules.find(
      // @ts-expect-error 타입 에러 무시
      (rule) =>
        rule?.test?.test?.('.png') || rule?.test?.test?.('.jpg') || rule?.test?.test?.('.svg'),
    );
    if (assetRule) {
      const prevExclude = assetRule.exclude;
      if (Array.isArray(prevExclude)) assetRule.exclude = [...prevExclude, /\.svg$/i];
      else if (prevExclude) assetRule.exclude = [prevExclude, /\.svg$/i];
      else assetRule.exclude = [/\.svg$/i];
    }

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: { typescript: true, svgo: true, titleProp: true, ref: true },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
