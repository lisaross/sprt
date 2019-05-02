require('dotenv').config({ path: '.env' });
const express = require('express');

const app = express();

const webpack = require('webpack');
const config = require('../../config/webpack.dev');
const compiler = webpack(config);

const webpackDevMiddleware = require('webpack-dev-middleware')(
  compiler,
  config.devServer
);

const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);

app.use(webpackDevMiddleware);
app.use(webpackHotMiddleware);

app.use(express.static('dist'));

const listener = app.listen(process.env.PORT || 7777, () =>
  console.log('💻  Listening on port ' + listener.address().port)
);
