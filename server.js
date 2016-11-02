var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('./webpack.config');
var compiler = webpack(webpackConfig);
var open = require('open');
var EventEmitter = require('events');
var event = new EventEmitter();
var serverConfig = {
    hostname: 'localhost',
    port: '8080',
    url: 'http://localhost:8080'
};

var devServer = new webpackDevServer(compiler, {
    contentBase: 'src/',
    hot: true,
    historyApiFallback: true,
    compress: true,
    clientLogLevel: 'info',
    quiet: false,
    noInfo: false,
    filename: 'bundle.js',
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    publicPath: webpackConfig.output.publicPath,
    headers: {
        'X-Custom-Header': 'yes'
    },
    stats: {
        colors: true
    },
    setup: function(app) {
        app.use(webpackHotMiddleware(compiler));
    }
});

devServer.listen(serverConfig.port, serverConfig.hostname, function(err) {
    if (err) return console.log(err);
    console.log('Listening at ' + serverConfig.url);
});

// 첫 컴파일 완료 후 브라우저 열기
event.once('doneInitial', function(){
    open(serverConfig.url);
});

compiler.plugin('done', function(){
    event.emit('doneInitial');
});
