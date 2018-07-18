const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')


module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: './index.html',
			inject: true
		}),
		new HtmlWebpackPlugin({
			template: './src/error.html',
			filename: './error.html',
			inject: true
		}),
		new CopyWebpackPlugin([{
			from: 'assets/images',
			to: 'assets/images',
			toType: 'dir'
		}])
	]
}