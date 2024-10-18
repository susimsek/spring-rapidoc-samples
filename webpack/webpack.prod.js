const webpackMerge = require('webpack-merge').merge;
const path = require('path');
const commonConfig = require("./webpack.common");

module.exports = async () =>
  webpackMerge(await commonConfig(), {
  entry: './src/main/webapp/src/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../target/classes/static'),
    filename: '[name].[contenthash:8].js',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
    plugins: []
  });
