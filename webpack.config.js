var webpack = require('webpack');
var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
	entry: [
		path.join(__dirname, './index.js')
	],
	module: {
		loaders: [{
			test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},{
				test: /\.scss$/,
				loaders: ["style-loader", "css-loader", "sass-loader"]
			}, {
            test: /\.svg$/,
                loaders: [
                    'babel-loader',
                {
                loader: 'react-svg-loader',
                query: {
                    jsx: true
                    }
                },
                ]
            },
		]
	},
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	plugins: [
        HTMLWebpackPluginConfig
    ]
}