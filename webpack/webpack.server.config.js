const webpack = require("webpack");

module.exports = {
  entry:  __dirname + '/../server/index.jsx',
  output: {
    path: __dirname + '/../serverApp',
    filename: 'server.js'
    },
  module: {
    loaders: [
    {
      test: /\.jsx$/,
      loader: 'babel-loader',
      exclude: __dirname + '/../(node_modules)/',
      query: {
        presets: ['latest-minimal', 'react', 'babel-preset-es2015']
      }
    }
  ]},
  target: 'node'
}
