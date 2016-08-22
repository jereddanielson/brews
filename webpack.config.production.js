var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var clean = require('clean-webpack-plugin');
var html = require('html-webpack-plugin');

module.exports = {
	entry: [
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
		new clean(["public"], { // clean public directory (delete all files)
			"verbose": true
		}),
		new webpack.DefinePlugin({ // set flag for production (reduces react.js size)
			"process.env": {
				"NODE_ENV": "'production'"
			}
		}),
		new html({ // create index.html from ejs template
			template: "./src/index.ejs"
		})
	]
};