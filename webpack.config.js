const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
	entry: {
		name: './src/js/main.js',
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js',
		publicPath: '/'   //указать папку, куда пакуются файлы
	},
	devtool: 'source-map',
	devServer:{
		contentBase: './dist',
		watchContentBase: true,  //указать в какой директории открывать
  		compress: true,
		overlay: true,  //ошибки на экране
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules|bower_components)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options:{
                    presets:["@babel/preset-env", "@babel/preset-react"],    // используемые плагины
                    plugins: [["@babel/plugin-proposal-class-properties", {loose: true}]]
                }
            },
			{
				test: /\.sass$/,
				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								minimize: true  //минимизировать css
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
						options:{
							name: '[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.(png|gif|jpe?g)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8000,   //лимит конвектирование в css и срабатывания url-loader
							name: 'img/[name].[ext]',
						}
					},
				],
			},
			{
                test: /\.svg/i,
                use: {
                    loader: 'svg-url-loader',
                    options: {}
                }
            },
            {
			    test: /\.mp3$/,
			    loader: 'file-loader'
			},
			 {
			    test: /\.mp4$/,
			    loader: 'file-loader'
			}
		],
	},
	plugins: [
		new HtmlWebpackPlugin(
			{
				template: './src/html/main.pug', //входная точка pug
				inject: false, //без доп.настроек css и js
			}
		),
    	new ExtractTextPlugin("style.css"),
    	new CleanWebpackPlugin(['dist']),
    	// new UglifyJsPlugin(),
  	],
	mode: 'development'
};