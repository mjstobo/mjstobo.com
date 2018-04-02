var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill', './js/main'],
    output: {
        filename: "./dist/index.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style-loader!css-loader?modules&camelCase=dashes" },
            {test: /\.js$/, loader: "babel-loader",  exclude: /node_modules/},
            {test: /\.jsx$/, loader: "babel-loader",  exclude: /node_modules/}
        ]
    },
  stats: {
      colors: true
  },
  devtool: 'source-map'
};
