const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: 'public',
    overlay: true,
    hot: true
  },
  module: {
    rules: []
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
