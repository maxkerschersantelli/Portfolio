const path = require('path');
const webpack = require('webpack');

let config;

if (process.env.NODE_ENV === 'production') {
	config = {
		context: __dirname,
		entry: [
			'react-hot-loader/patch',
			'webpack-dev-server/client?http://localhost:3000',
			'webpack/hot/only-dev-server',
			'./js/ClientApp.jsx'
		],
		devtool: 'cheap-eval-source-map',
		output: {
			path: path.join(__dirname, 'public'),
			filename: 'bundle.js',
			publicPath: '/public/'
		},
		devServer: {
			hot: true,
			publicPath: '/public/',
			historyApiFallback: true
		},
		resolve: {
			extensions: ['.js', '.jsx', '.json'],
			alias: {
				react: 'preact-compat',
				'react-dom': 'preact-compat'
			}
		},
		stats: {
			colors: true,
			reasons: true,
			chunks: true
		},
		plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()],
		module: {
			rules: [
				{
					enforce: 'pre',
					test: /\.jsx?$/,
					loader: 'eslint-loader',
					exclude: /node_modules/
				},
				{
					test: /\.jsx?$/,
					loader: 'babel-loader',
					include: [path.resolve('js'), path.resolve('node_modules/preact-compat/src')]
				}
			]
		}
	};
} else {
	config = {
		context: __dirname,
		entry: [
			'react-hot-loader/patch',
			'webpack-dev-server/client?http://localhost:3000',
			'webpack/hot/only-dev-server',
			'./js/ClientApp.jsx'
		],
		devtool: 'cheap-eval-source-map',
		output: {
			path: path.join(__dirname, 'public'),
			filename: 'bundle.js',
			publicPath: '/public/'
		},
		devServer: {
			hot: true,
			publicPath: '/public/',
			historyApiFallback: true,
            port: 3000
		},
		resolve: {
			extensions: ['.js', '.jsx', '.json']
		},
		stats: {
			colors: true,
			reasons: true,
			chunks: true
		},
		plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()],
		module: {
			rules: [
				{
					enforce: 'pre',
					test: /\.jsx?$/,
					loader: 'eslint-loader',
					exclude: /node_modules/
				},
				{
					test: /\.jsx?$/,
					loader: 'babel-loader',
					include: [path.resolve('js'), path.resolve('node_modules/preact-compat/src')]
				}
			]
		}
	};
}

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'server') {
	config.entry = './js/ClientApp.jsx';
	config.devtool = false;
	config.plugins = [];
}

module.exports = config;
