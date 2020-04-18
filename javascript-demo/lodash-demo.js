const _ = require('lodash')

const dst = {
    name: '1',
    age: 2,
    hobitts: [
        'baskatball',
        'games'
    ]
}

const source = {
    // name: '1',
    // age: undefined,
    hobitts: [
        'baskatball2',
        'games'
    ]
}
log({ ...dst, ...source })
// log({ ...dst, ...source })
// log(dst)
// log(source)

function log(str) {
    console.log(str);
}



