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
    root: [path.resolve('./src')],
    extensions: [
      '',
      '.js'
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new SimpleProgressPlugin()
  ],
  externals: {
    'mithril': 'm',
    'jquery': 'jQuery'
  },
  eslint: {
    configFile: '.eslintrc'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel',
        include: path.join(__dirname, 'src')
      }, {
        test: /.jsx?$/,
        loader: 'eslint',
        include: path.join(__dirname, 'src')
      }
    ]
  }
};
