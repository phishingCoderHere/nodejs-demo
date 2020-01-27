// const jsdata = require('./front.js')
const fs = require('fs')
const rl = require('readline')
const XLSX = require('xlsx')
const _ = require('lodash')

let excelArr = []


const map = new Map()
const resultmap = new Map()
const reader = rl.createInterface({
    input: fs.createReadStream('./backendfile.txt')
})
reader.on('line', line => {
    if (line.length === 0) {
        return;
    }
    const splitR = line.split('=')
    const varname = splitR[0]
    const varvalue = splitR[1]
    if (varname && varvalue) {
        map.set(varname, varvalue)
    }
})

reader.on('close', function () {
    console.log('关闭输入流...');
    console.log(map);
    console.log(map.length);
    _.merge(resultmap, map)
    fs.readFile('./前后台8号之后新增翻译-汇总1.xlsx', (err, data) => {
        if (err) throw err;
        const wb = XLSX.read(data, {
            type: 'buffer'
        })
        excelArr = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[1]])
        console.log(excelArr);

        for (var [key] of map) {
            const val = map.get(key)
            resultmap.set(key, findEngByZh(val))
        }
        console.log(resultmap);

        for (var [key, value] of resultmap) {
            const str = key + '=' + value + '\n'
            fs.appendFile('./backend-result.txt', str, function (err) {
            })
        }

    });
})

function findEngByZh(zhStr) {
    if (!zhStr) {
        throw new Error()
    }
    let result
    for (let i = 0; i < excelArr.length; i++) {
        const item = excelArr[i]
        if (item['中文'] === zhStr) {
            result = item['英文']
            break;
        }

    }
    if (!result) {
        result = zhStr
    }
    return result
}