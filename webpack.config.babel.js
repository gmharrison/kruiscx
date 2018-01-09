var webpack = require('webpack');
var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/index.html',
    filename: 'index.html',
    inject: 'body'
});

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: [
		path.join(__dirname, './index.js')
	],
	module: {
		loaders: [{
			test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
                options: {
                    "presets": [["es2015", {"modules": false}], "react"]
                  }
			},{
                    test: /\.(scss)$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    importLoaders: 1,
                                    modules: true,
                                    localIdentName: '[name]_[local]_[hash:base64:5]',
                                }
                            },
                            'sass-loader'
                        ]
                    })
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
            }, {
                test: /\.(jpe?g|png|gif)$/,
                use: [
                {
                  loader: 'file-loader',
                  options: {
                    query: {
                      name:'webpack_bundles/img/[name].[ext]'
                    }
                  }
                },
                {
                  loader: 'image-webpack-loader',
                  options: {
                    query: {
                      mozjpeg: {
                        progressive: true,
                      },
                      gifsicle: {
                        interlaced: true,
                      },
                      optipng: {
                        optimizationLevel: 7,
                      },
                        name:'/img/[name].[ext]'
                    }
                  }
                }],
            }
		]
	},
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	plugins: [
        HTMLWebpackPluginConfig,
        new ExtractTextPlugin("styles.css"),
    ]
}