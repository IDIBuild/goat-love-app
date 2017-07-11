var webpack       = require('webpack');
var path          = require('path');
var config        = require('./webpack.config');
var ArchivePlugin = require('webpack-archive-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

config.output = {
  filename: '[name].bundle.js',
  publicPath: '',
  path: path.resolve(__dirname, 'dist')
};

config.plugins = config.plugins.concat([
    new CopyWebpackPlugin([
        { from: 'client/resources' , to : 'resources'}
    ]),
    // Archive bundles
    new ArchivePlugin()
]);

module.exports = config;
