const path = require('path');
const webpack = require('webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const resolve = dir => path.resolve(__dirname, '..', dir);
const isProd = process.env.NODE_ENV === 'production';

const postcssPlugins = () => {
    let plugins = [
        require('autoprefixer')({
            browsers: ["android>=4.0", "ios>=7.0", 'last 2 versions'],
            cascade: true,
            remove: false,
        }),
    ];

    return plugins;
}

module.exports = {
	mode: isProd ? 'prodection' : 'development',
	devtool: isProd ? '' : 'inline-source-map',
	devServer: {
		contentBase: path.resolve(__dirname, 'example'),
    	hot: true,
		inline: true,
		host: '0.0.0.0',
		port: 9090,
	},
	entry: {
		bundle: './src/index',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		library: 'tlVueSlide',
		libraryTarget: 'umd',
	},
	resolve: {
		extensions: ['.js', '.vue'],
	},
	externals: {
		vue: 'Vue',
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			}, {
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015'],
				}
			}, {
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: postcssPlugins,
						},
					}
				]
			}, {
				test: /\.html$/,
				loader: 'html-loader',
			},
		],
	},
	plugins: [
		new VueLoaderPlugin(),
		// new BundleAnalyzerPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	],
};
