const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const outputFile = '[name]';

module.exports = merge(common(outputFile), {
  mode: 'development',
  devtool: 'source-map',

  module: {
    rules: [

      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },

  devServer: {
    static: './',
    open: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },

  watchOptions: {
    ignored: /node_modules/
  },

});