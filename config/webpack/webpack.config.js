const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: { name: './src/index.js' },
	resolve: {
        extensions: ['.ts', '.tsx', '.js', 'jsx', '.json']
    },
	module: {
		rules: [
			{
                test: /\.(ts|js)x?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
			},
			{
				test: /\.(module.sass|module.scss)$/,
				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								modules: true,
								localIdentName: '[local]_[hash:5]'
							}
						},
						{
							loader: 'postcss-loader'
						},
						{
							loader: 'sass-loader'
						}
					],
					fallback: 'style-loader'
				})
			},
			{
				test: /[^(.module)]\.(sass|scss)$/,
				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								minimize: true,
							}
						},
						{
							loader: 'postcss-loader'
						},
						{
							loader: 'sass-loader'
						}
					],
					fallback: 'style-loader'
				})
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
	plugins: [],
};
