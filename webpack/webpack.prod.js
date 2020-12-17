const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        /*
         * Google requires some conditions:
         * - Removal of whitespace, newlines, code comments, and block delimiters
         * - Shortening of variable and function names
         * - Collapsing the number of JavaScript files
         */
        terserOptions: {
          compress: true, // To rename variables & function names
          mangle: true, // Note `mangle.properties` is `false` by default.
        },
      }),
    ],
  },
});
