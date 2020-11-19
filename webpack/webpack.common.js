const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const srcDir = '../src';

const browser = process.env.BROWSER;

module.exports = {
  entry: {
    popup: path.join(__dirname, `${srcDir}/popup.ts`),
    background: path.join(__dirname, `${srcDir}/background/${browser}/background.ts`),
  },
  output: {
    path: path.join(__dirname, '../dist/js'),
    filename: '[name].js',
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './images', to: '../images', context: 'public' },
        { from: './background.html', to: '../background.html', context: 'public' },
        { from: './popup.html', to: '../popup.html', context: 'public' },
        { from: `${browser}_manifest.json`, to: '../manifest.json', context: 'public' },
      ],
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: 'public/background.html',
      filename: '../background.html',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: 'public/popup.html',
      filename: '../popup.html',
    }),
  ],
};
