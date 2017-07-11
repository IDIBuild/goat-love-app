var webpack       = require('webpack');
var path          = require('path');
var config        = require('./webpack.config');
var ArchivePlugin = require('webpack-archive-plugin');

config.output = {
  filename: '[name].bundle.js',
  publicPath: '',
  path: path.resolve(__dirname, 'dist')
};

config.plugins = config.plugins.concat([
    // Archive bundles
    new ArchivePlugin()
]);

module.exports = config;
