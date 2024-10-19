require('webpack');
const { merge } = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MergeJsonWebpackPlugin = require('merge-jsons-webpack-plugin');

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
        }),
        new MergeJsonWebpackPlugin({
          output: {
            groupBy: [
              {
                pattern: './src/main/webapp/i18n/en/*.json', // Match all English JSON files
                fileName: './i18n/en.json', // Output a merged file at this location
              }
            ],
          },
        }),
      ],
    },
  );
};
