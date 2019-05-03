require('dotenv').config({ path: '.env' });
const express = require('express');
const path = require('path');
const helpers = require('../helpers');
const routes = require('../routes/index');

const app = express();

app.use(express.static(path.join(__dirname, '../../public')));

// view engine setup
app.set('views', path.join(__dirname, '../views/')); // this is the folder where we keep our pug files
app.set('view engine', 'pug'); // we use the engine pug, mustache or EJS work great too

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
  console.log(`💻  Listening on PORT ${listener.address().port}`)
);
