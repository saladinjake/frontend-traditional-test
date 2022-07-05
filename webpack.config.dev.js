const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: `${__dirname}/public`,
    historyApiFallback: true,
    port: 4000,
    hot: true
  },
  plugins: [
    new Dotenv()
    
  ]
});
