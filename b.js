var foo = 'b.js'
function b(x,y) {
    return x*y;
}
console.log('b.js start')
var c = require('./c.js')
console.log('b.js end')
console.log('foo'+foo )

exports.b = b;
exports.foo = foo;
exports.c = c;
console.log('this --- ',this)
console.log('module --- ',module)
console.log('exports ---', exports)
 