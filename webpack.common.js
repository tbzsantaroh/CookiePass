const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackWatchedGlobEntries = require('webpack-watched-glob-entries-plugin');


const entries = WebpackWatchedGlobEntries.getEntries([path.resolve(__dirname, './src/ts/**/*.ts')], {
	ignore: path.resolve(__dirname, './src/ts/**/_*.ts'),
})();

const htmlGlobPlugins = (entries, srcPath) => {
	return Object.keys(entries).map((key) =>
		new HtmlWebpackPlugin({
			inject: 'body',
			filename: `${key}.html`,
			template: `${srcPath}/${key}.html`,
			chunks: [key],
			minify: false,
		})
	);
};

module.exports = (outputFile) => ({
	entry: entries,

	output: {
		path: path.resolve(__dirname, './dist'),
		filename: `./js/[name].js`,
	},

	module: {
		rules: [

			{
				test: /\.ts$/,
				use: 'ts-loader',
			},

			{
				test: /\.(sa|sc|c)ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							implementation: require('sass'),
						},
					},
				],
			},

			{
				test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
				generator: {
					filename: `./img/[name][ext]`,
				},
				type: 'asset/resource',
			},

		],
	},

	performance: {
		hints: false,
	},

	plugins: [
		new ESLintPlugin({
			extensions: ['.ts', '.js'],
			exclude: 'node_modules'
		}),

		new WebpackWatchedGlobEntries(),
		...htmlGlobPlugins(entries, './src'),

		new MiniCssExtractPlugin({
			filename: `./css/[name].css`,
		}),
	],

	resolve: {
		extensions: [
			'.ts', '.js', '.json'
		],

		alias: {
			'@font': path.resolve(__dirname, './src/font/'),
			'@image': path.resolve(__dirname, './src/image/'),
			'@js': path.resolve(__dirname, './src/js/'),
			'@scss': path.resolve(__dirname, './src/scss/')
		},
	},
});