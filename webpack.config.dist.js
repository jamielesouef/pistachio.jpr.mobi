var FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules|dist/,
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|dist)/,
        loader: 'babel',
      },
    ],
  },
  plugins: [
    new FlowStatusWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'JP & R',
      template: 'index.ejs',
    }),
    new CopyWebpackPlugin([
      {from: 'CNAME'},
    ]),
  ],
  devServer: {'hide-modules': true,
    outputPath: __dirname + '/dist',
  },
  eslint: {
    configFile: '.eslintrc.yml',
  },
};
