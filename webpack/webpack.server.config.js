const webpack = require("webpack");

module.exports = {
  entry:  __dirname + '/../app/source.jsx',
  output: {
    path: __dirname + '/../bundle',
    filename: 'index.js'
    },
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: __dirname + '/../(node_modules)/',
      query: {
        presets: ['latest-minimal', 'react', 'babel-preset-es2015']
      }
    }
  ]},
}
