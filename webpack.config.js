var webpack = require('webpack');
var path = require('path');

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
	}
}