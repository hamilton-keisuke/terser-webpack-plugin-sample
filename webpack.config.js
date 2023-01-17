const path    = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    application: './src/js/index.js'
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
	optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: true,
      }),
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery'
    }),
    // clean-webpack-plugin
    // webpackのファイル出力先で、ビルド前にファイルを削除するだけのプラグインです。
    // 開発途中でwebpack.config.jsを変更し出力するファイルが変わる場合などは前回ビルド分のファイルを自動削除してくれるのが便利なため導入しています。
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        '!.keep'
      ],
    })
  ]
}
