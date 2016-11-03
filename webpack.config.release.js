var path = require('path');
var webpack = require('webpack');
var SimpleProgressPlugin = require('webpack-simple-progress-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
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
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: false,
        warnings: false
      },
      mangle: {
        screw_ie8: false,
      },
      output: {
        screw_ie8: false,
        quote_keys: true,
        ascii_only: true,
        keep_quoted_props: true
      },
      minimize: true
    }),
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
