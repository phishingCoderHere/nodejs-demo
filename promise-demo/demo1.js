const fs = require('fs')

pReadFile('./1.txt').then((d) => {
    console.log(d);
    return pReadFile('./2.txt')
}).then((d) => {
    console.log(d);
    return pReadFile('./3.txt')
}).then((d) => {
    console.log(d);
})

function pReadFile(path) {
    const p1 = new Promise((resolve, reject) => {
        fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
    return p1
}