const express = require('express')
const webpack = require('webpack')
const isDevelopment = process.env.NODE_ENV !== 'production' 
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('./webpack.config.dev')
const app = express()
const compiler = webpack(WebpackConfig)
const history = require('connect-history-api-fallback')

if (isDevelopment) {
	app.use(webpackDevMiddleware(compiler, {
		publicPath: '/',
		filename: '[name].js',
		chunkFilename: '[id].chunk.js',
		stats: {
			colors: true,
			chunks: false
		}
	}))
	app.use(webpackHotMiddleware(compiler))
}

app.use(history())
app.use(express.static(__dirname))

const port = process.env.PORT || 3000

module.exports = app.listen(port, '127.0.0.1', () => {
	console.log(`Server listening on https://localhost:${port}, Ctrl + C to stop`)
})
