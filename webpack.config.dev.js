const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './app.js',
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[name].js',
		chunkFilename: '[id].chunk.js'
	},
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
			{ test: /\.vue$/, loader: 'vue-loader' },
			{ test: /\.s[a|c]ss$/, loader: 'style!css!sass' },
			{ test: /\.css$/,
			    use: ExtractTextPlugin.extract({
					use: 'css-loader',
			    	fallback: 'style-loader'
				})
		    },
		    { test: /.(eot|svg|ttf|woff|woff2)(\?\S*)?$/, loader: 'file-loader' }
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'shared',
			filename: 'shared.js'
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"development"'
			}
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new ExtractTextPlugin({
			filename: 'app.css'
		}),
		new HtmlWebPackPlugin({
			filename: 'index.html',
			template: 'index-template.html'
		})
	]
}