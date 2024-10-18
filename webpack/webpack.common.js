require('webpack');
const { merge } = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = async () => {

  return merge(
    {
      stats: {
        children: false,
      },
      plugins: [
        new CopyWebpackPlugin({
          patterns: [
            { from: './src/main/webapp/content/', to: 'content/' },
            { from: './src/main/webapp/favicon.ico', to: 'favicon.ico' },
            { from: './src/main/webapp/robots.txt', to: 'robots.txt' },
          ],
        }),
        new HtmlWebpackPlugin({
          template: './src/main/webapp/index.html',
          chunksSortMode: 'auto',
          inject: 'body',
          base: '/',
        })
      ],
    },
  );
};
