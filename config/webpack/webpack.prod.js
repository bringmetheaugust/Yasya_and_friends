const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.config.js');

config.output = {
	path: path.resolve(__dirname, '../../dist'),
	filename: '[chunkhash].js',
	publicPath: ''
};

config.plugins.push(
	new ExtractTextPlugin({
		filename: "[chunkhash].css",
		allChunks: true
	}),
	new HtmlWebpackPlugin(
		{ template: './src/html/index.pug' }
	),
	new UglifyJsPlugin(),
	new CleanWebpackPlugin()
);

config.mode = 'production';

module.exports = config;
