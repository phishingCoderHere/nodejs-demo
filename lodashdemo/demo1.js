var _ = require('lodash')
var s = {
    name:'aaa',
    age:222,
    no: undefined
}

var t = {}

_.merge(t, s)

console.log(t)
console.log(s)

console.log('==============================')
var s = {
    name:'aaa',
    age:222,
    no: undefined
}

var t = {}
_.mergeWith(t, s)

console.log(t)
console.log(s)