var webpack = require('webpack');
var path = require('path');
var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');
require('babel-polyfill');
require('babel-loader');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    client: ['babel-polyfill','./stylesheets/style.scss','./js/index.js']
  },
  watch: true,
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'client.min.js'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        // Only run .js and .jsx files through Babel
        test: /\.jsx?$/,
        include: path.resolve(__dirname, "js"),
        exclude: path.resolve(__dirname, "node_modules"),

        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['react-html-attrs',
                    'transform-class-properties',
                    'transform-runtime',
                    'transform-decorators-legacy',
                    'transform-object-rest-spread'
                   ]
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpackUglifyJsPlugin({
      cacheFolder: path.resolve(__dirname, 'public/cached_uglify/'),
      debug: true,
      minimize: true,
      sourceMap: false,
      output: {
        comments: false
      },
      compressor: {
        warnings: false
      }
    })
  ]
};
