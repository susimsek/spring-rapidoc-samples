const webpackMerge = require('webpack-merge').merge;
const path = require('path');

const commonConfig = require('./webpack.common.js');

module.exports = async () =>
  webpackMerge(await commonConfig(), {
  entry: './src/main/webapp/src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../target/classes/static'),
    filename: '[name].[contenthash:8].js',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
  },
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, '../target/classes/static/'),
    },
    port: 9060,
    historyApiFallback: true,
    proxy: [
      {
        context: ['/api', '/v3/api-docs'],
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    ],
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
