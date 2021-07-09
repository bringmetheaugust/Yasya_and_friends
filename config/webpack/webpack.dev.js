import { resolve } from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

const { EnvironmentPlugin } = webpack;

import config from './webpack.config.js';

export default {
	...config,
	output: {
		path: resolve(resolve(), './dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	devtool: 'source-map',
	devServer: {
		port: 2100,
		contentBase: './dist',
		watchContentBase: true,
		compress: true,
		overlay: true,
		historyApiFallback: true,
	},
	mode: 'development',
	plugins: [
		...config.plugins,
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[name].chunk.css'
		}),
		new EnvironmentPlugin({ isDev: true })
	],
	mode: 'development'
};
