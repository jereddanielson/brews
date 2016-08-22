var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var html = require('html-webpack-plugin');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:3000',
		'webpack/hot/only-dev-server',
		'./src/index.jsx' // Your appʼs entry point
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle-[hash].js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: loaders
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new html({ // create index.html from the ejs template
			template: "./src/index.ejs"
		})
	]
};