const sub = require('./bar')

var add = function (a, b) {
    return a + b;
}
var addSub = function (a, b) {
    return add(a,b)+sub(a,b);
}
exports.add = add
exports.sub = sub.sub
exports.addSub = addSub
exports.str = 'i can add'