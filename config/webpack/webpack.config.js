import { resolve } from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
	entry: { name: './src/index.js' },
	resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.jsx', '.cjs' ,'.json' ]
    },
	experiments: {
		topLevelAwait: true
	},
	module: {
		rules: [
			{
                test: /\.(ts|js|cjs)x?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
			},
			{
				test: /\.(module.sass|module.scss)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: "[local]_[hash:base64:5]"
							}
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								config: resolve(resolve(), "./config/postcss.config.cjs"),
							},
						}
					},
					{ loader: 'sass-loader' }
				]
			},
			{
				test: /[^(.module)]\.(sass|scss)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{ loader: 'css-loader' },
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								config: resolve(resolve(), "./config/postcss.config.cjs"),
							},
						}
					},
					{ loader: 'sass-loader' }
				]
			},
			{
	            test: /\.pug$/,
	            loader: "pug-loader"
	        },
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				use: [
					{
						loader: 'file-loader',
						options:{ name: '[name].[ext]' }
					}
				]
			},
			{
				test: /\.(png|gif|jpe?g)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8000,
							name: 'img/[hash:5].[ext]',
						}
					},
				],
			},
			{
                test: /\.svg/i,
                loader: 'svg-url-loader'
            },
            {
			    test: /\.mp3$/,
			    loader: 'file-loader'
			},
			 {
			    test: /\.(mp4|webm)$/,
			    loader: 'file-loader'
			}
		],
	},
	plugins: [
		new HtmlWebpackPlugin(
			{
				template: './src/index.pug',
				favicon: './src/media/favicon.png'
			}
		)
	],
};
