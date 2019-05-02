require('dotenv').config({ path: '.env' });
const express = require('express');
const helpers = require('../helpers');
const routes = require('../routes/index');

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

// pass variables to our templates + all requests
app.use((req, res, next) => {
  res.locals.h = helpers;
  res.locals.user = req.user || null;
  res.locals.currentPath = req.path;
  next();
});

// After allllll that above middleware, we finally handle our own routes!
app.use('/', routes);

const listener = app.listen(process.env.PORT || 7777, () =>
  console.log('💻  Listening on port ' + listener.address().port)
);
