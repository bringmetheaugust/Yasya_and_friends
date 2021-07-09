import { resolve } from "path";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

import config from './webpack.config.js';

export default {
	...config,
	output: {
		path: resolve(resolve(), './dist'),
		filename: '[chunkhash].js',
		publicPath: ''
	},
	plugins: [
		...config.plugins,
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[name].chunk.css'
		}),
		new UglifyJsPlugin(),
	],
	mode: 'production',
};
