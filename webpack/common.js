const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '../src/index.js'),

  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
    mainFields: ['module', 'main']
  },

  target: 'node',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'images/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(eot|ttf|otf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.html')
    })
  ],

  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'fpUtils.js',
    publicPath: '/',
    library: 'fpUtils',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
};
