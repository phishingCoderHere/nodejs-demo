var fs = require('fs')
console.log(fs)
fs.mkdir('1.txt', ()=>{
    console.log(arguments)
})