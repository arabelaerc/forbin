const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Where webpack looks to start building the bundle
    // entry: './src/base/js/index.js',
    entry: {
		main: ['./src/base/js/index.js'],
	},
    // Where webpack outputs the assets and bundles
    output: {
        // filename: 'bundle.js',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
        clean: true, // Limpia la carpeta "dist" antes de cada build
    },
    plugins: [
        // Home
		new HtmlWebpackPlugin({
			template: './src/pages/home/index.pug',
			hash: true,
			filename: 'index.html',
			chunks: ['main'],
			inject: true,
			// minify: {
			// 	collapseWhitespace: process.env.NODE_ENV === 'production' ? true : false
			// }
		}),
        new HtmlWebpackPlugin({
			template: './src/pages/about/index.pug',
			hash: true,
			filename: 'nosotros/index.html',
			chunks: ['main'],
			inject: true,
			// minify: {
			// 	collapseWhitespace: process.env.NODE_ENV === 'production' ? true : false
			// }
		}),
        new HtmlWebpackPlugin({
			template: './src/pages/products/index.pug',
			hash: true,
			filename: 'productos/index.html',
			chunks: ['main'],
			inject: true,
			// minify: {
			// 	collapseWhitespace: process.env.NODE_ENV === 'production' ? true : false
			// }
		}),
        new HtmlWebpackPlugin({
			template: './src/pages/blog/index.pug',
			hash: true,
			filename: 'blog/index.html',
			chunks: ['main'],
			inject: true,
			// minify: {
			// 	collapseWhitespace: process.env.NODE_ENV === 'production' ? true : false
			// }
		}),
    ],
    // Determine how modules within the project are treated
    module: {
        rules: [
            {
				test: /\.pug$/,
				use: [
					{
						loader: "html-loader-srcset",
						options: {
							interpolate: true,
							attrs: [
								"img:src",
								":srcset",
								"img:data-src",
								":data-srcset",
								":data-lazy",
								":data-poster",
								"source:data-src",
							],
						},
					},
					{
						loader: "pug-html-loader",
						options: {
							pretty: true,
						},
					},
				],
			},
            // JavaScript: Use Babel to transpile JavaScript files
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(ico|png|jp?g|webp|svg)$/,
                type: 'asset/resource',
                generator: {
                  filename: 'img/[name][ext][query]',
                //   filename: 'img/[name].[hash:8][ext][query]',
                },
            },
            // // Images: Copy image files to build folder
			// {
			// 	test: /\.(?:ico|gif|png|svg|jpg|jpeg|mp4)$/i,
			// 	include: path.resolve(__dirname, "src/assets/img"),
			// 	type: 'asset/resource',
			// 	generator: {
			// 		filename: 'img/[name][ext]'
			// 	}
			// },

			// // Fonts and SVGs: Inline files
			// {
			// 	test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
			// 	include: path.resolve(__dirname, "src/fonts"),
			// 	type: 'asset/resource',
			// 	// generator: {
			// 	// 	//filename: 'wp-content/themes/html5blank-stable/fonts/[name][ext]',
			// 	// 	filename: 'fonts/[name][ext]'
			// 	// }
			// },
        ],
    },
};