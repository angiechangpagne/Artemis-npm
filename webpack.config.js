const path = require('path');
const lodash = require('lodash');
const webpack = require('webpack');


module.exports = {
  entry: path.join(__dirname, './src/index.tsx'),
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  mode:process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_module|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use:[
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ]
  },
  resolve: {
    extensions:[".ts", ".tsx", ".js", ".jsx"]
  },
  devtool: 'inline-source-map'
};