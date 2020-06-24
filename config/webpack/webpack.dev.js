const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.config.js');

config.output = {
	path: path.resolve(__dirname, './dist'),
	filename: 'bundle.js',
	publicPath: '/'
};

config.devtool = 'source-map';

config.devServer = {
	contentBase: './dist',
	watchContentBase: true,
	compress: true,
	overlay: true,
	historyApiFallback: true,
};

config.mode = 'development';

config.plugins.push(
	new ExtractTextPlugin("style.css"),
	new HtmlWebpackPlugin(
		{ template: './src/index.pug' }
	)
);

config.mode='development';

module.exports = config;
