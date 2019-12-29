require('./a')
require('./b')
const fn = require('./b')
console.log('main', fn);