var path = require('path');
var webpack = require('webpack');
var SimpleProgressPlugin = require('webpack-simple-progress-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    modules: [
      path.resolve('./node_modules'),
      path.resolve('./src')
    ],
    extensions: ['.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new SimpleProgressPlugin()
  ],
  externals: {
    'mithril': 'm',
    'jquery': 'jQuery'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel',
        include: path.join(__dirname, 'src')
      }, {
        test: /.jsx?$/,
        loader: 'eslint',
        include: path.join(__dirname, 'src'),
        options: {
          configFile: '.eslintrc'
        }
      }
    ]
  }
};
