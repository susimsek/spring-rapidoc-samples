const webpackMerge = require('webpack-merge').merge;
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const path = require('path');
const sass = require('sass');

const commonConfig = require('./webpack.common.js');

module.exports = async options =>
  webpackMerge(await commonConfig(), {
  entry: './src/main/webapp/src/index.tsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../target/classes/static'),
    filename: '[name].[contenthash:8].js',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
  },
  devServer: {
    hot: true,
    static: {
      directory: './target/classes/static/',
    },
    port: 9060,
    historyApiFallback: true,
    proxy: [
      {
        context: ['/api', '/v3/api-docs'],
        target: `http${options.tls ? 's' : ''}://localhost:8080`,
        changeOrigin: options.tls,
        secure: false
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
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { url: false },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: { implementation: sass },
          },
        ],
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 9000,
        proxy: {
          target: `http${options.tls ? 's' : ''}://localhost:${options.watch ? '8080' : '9060'}`,
          ws: true,
          proxyOptions: {
            changeOrigin: false,
          },
        },
        socket: {
          clients: {
            heartbeatTimeout: 60000,
          },
        },
      },
      {
        reload: false,
      },
    ),
  ]
  });
