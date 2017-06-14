const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
	entry: './app.js',
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[name].js',
		chunkFilename: '[id].chunk.js'
	},
	resolve: {
		alias: {
			'scss-loader': 'sass-loader'
		}
	},
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
			{	test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					extractCSS: true,
					loaders: {
						css: ExtractTextPlugin.extract({
							use: 'css-loader?' + JSON.stringify({ minimize: { discardComments: {removeAll: true } } }),
              				fallback: 'vue-style-loader'
						}),
						scss:
						 ExtractTextPlugin.extract({
							use: 
								[
									{	loader: 'css-loader',
										options: {
											minimize: {
												discardComments: {
													removeAll: true
												}
											}
										}
									},
									'sass-loader'
								],
							fallback: 'style-loader'
						})
					}
				}
			},
			{	test: /\.css$/,
				use: ExtractTextPlugin.extract({
              			use: 'css-loader?' + JSON.stringify({ minimize: { discardComments: {removeAll: true } } }),
              			fallback: 'style-loader'
            		}) 
			},
			{ test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/, loader: 'file-loader' }
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'shared',
			filename: 'shared.js'
		}),
		new webpack.DefinePlugin({
			'process.env': { 
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: { 
				warnings: false
			},
			sourceMap: false,
			output: {
				comments: false
			}
		}),
		new ExtractTextPlugin({
  		    filename: 'app.css'
  		}),
  		new OptimizeCssPlugin({
  			assetNameRegExp: /app\.css$/,
  			canPrint: true
  		})
  	]
}

