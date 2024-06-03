import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import WebpackBar from 'webpackbar';
import CracoAlias from 'craco-alias';

process.env.BROWSER = 'none';

export const webpack = {
  plugins: [
    new WebpackBar({ profile: true }),
    ...(process.env.NODE_ENV === 'development' ? [new BundleAnalyzerPlugin({ openAnalyzer: false })] : []),
  ],
};
export const plugins = [
  {
    plugin: CracoAlias,
    options: {
      source: 'tsconfig',
      // baseUrl SHOULD be specified
      // plugin does not take it from tsconfig
      baseUrl: './src/',
      /* tsConfigPath should point to the file where "baseUrl" and "paths"
       are specified*/
      tsConfigPath: './tsconfig.node.json',
    },
  },
];
