const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  module: {
    rules: [{
      test: /\.(css)$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ],
          plugins: [
            'react-hot-loader/babel',
            '@babel/plugin-proposal-class-properties'
          ]
        }
      }
    }, {
      test: /\.(jpg|jpeg|png|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      ]
    }, {
      test: /\.(md)$/i,
      use: [
        'html-loader',
        'markdown-loader'
      ]
    }]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/content/texts', to: 'src/content/'}
    ]),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: path.resolve(__dirname, 'src/template.ejs')
    })
  ]
}