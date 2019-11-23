var foo = 'a.js'

function a(x,y) {
    return x+y;
}
console.log('a.js start')
var mb = require('./b')
console.log('a.js end')
console.log(mb)
console.log(mb.b(100,200))

console.log('foo'+foo )