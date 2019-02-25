var path = require('path');
var webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: ['babel-polyfill', './js/main'],
    output: {
        filename: "./index.js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                  "style-loader",
                  MiniCssExtractPlugin.loader,
                  "css-loader",
                  "sass-loader"
                ]
              },
            {test: /\.js$/, loader: "babel-loader",  exclude: /node_modules/},
            {test: /\.jsx$/, loader: "babel-loader",  exclude: /node_modules/}
        ]
    },
  stats: {
      colors: true
  },
  devtool: 'source-map',
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
    })
  ]
};
