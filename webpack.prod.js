const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const glob = require('glob'); // Necesario para buscar archivos

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'assets/[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Limpia la carpeta dist antes de cada build
  },

  module: {
    rules: [{
      // test: /\.css$/,
      test: /\.(scss|css)$/,
      use: [
        MiniCssExtractPlugin.loader, // Extraer CSS en archivos separados
        'css-loader', // Interpretar @import, @use, etc.
        'sass-loader', // Compilar SCSS a CSS
      ],
    }, 
  ],

  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/[name].[contenthash].css',
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.resolve(__dirname, 'src')}/**/*`, { nodir: true }), // Busca todos los archivos relevantes
      safelist: {
        standard: ['active', 'leaflet-control', 'swiper-pagination-bullet', 'swiper-pagination-bullet-active', 'class-to-keep', /^dynamic-class-/], // Clases que no se deben purgar
        deep: [/^dynamic-class-/, /^tooltip-/], // Clases que comienzan con "dynamic-class-" o "tooltip-"
        greedy: [/^ui-/], // Clases completas como "ui-btn"
        keyframes: true, // Mantiene todas las animaciones (keyframes)
        variables: true, // Mantiene todas las variables CSS personalizadas
      },
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
})