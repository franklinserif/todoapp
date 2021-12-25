const path = require('path');
const fastRefresh = '@pmmmwh/react-refresh-webpack-plugin';
const ReactRefreshWebpackPlugin = require(fastRefresh);
const {HotModuleReplacementPlugin} = require('webpack');

const {merge} = require('webpack-merge');
const common = require('./webpack.common');

/** @type {import('webpack').Configuration} */
const devConfig = {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: false,
    open: true,
    port: 3000,
    hot: true,
  },
  plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        use: ['style-loader', 'css-loader'],
        test: /.(css)$/,
      },
    ],
  },
};

module.exports = merge(common, devConfig);
