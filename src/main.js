require('webpack-hot-middleware/client?reload=true');
require('./sass/main.scss');
require('./views/index.pug');

console.log('env: ' + process.env.NODE_ENV);
