const webpack = require('webpack');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const common = require('./webpack.config.common.js');
const Dotenv = require('dotenv-webpack');


module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [new TerserPlugin()],
  },
  plugins: [
  new Dotenv(),
    
  new OptimizeCSSAssetsPlugin({})
  ]
});
