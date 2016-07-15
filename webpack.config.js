'use strict';

const ExtractPlugin = require('extract-text-webpack-plugin')

const plugins = [
  new ExtractPlugin('bundle.css')
]

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  output: {
    filename: 'bundle.js',
    path: 'build'
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract('style', 'css!sass!')
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        querty: {
          presets: ['es2015']
        }
      }
    ]
  }
}
