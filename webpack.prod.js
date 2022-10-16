const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const outputFile = '[name]';

module.exports = merge(common(outputFile), {
	mode: 'production',


	output: {
		clean: true,
	},


	module: {
		rules: [

			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
					}
				]
			},

			{
				test: /\.html$/i,
				loader: 'html-loader',
				options: {
					minimize: false,
				},
			},
		],
	},


});


