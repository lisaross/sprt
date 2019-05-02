require('dotenv').config({ path: '.env' });

var app = require('express')();
var listener = app.listen(process.env.PORT || 7777, () =>
  console.log('💻  Listening on port ' + listener.address().port)
);
