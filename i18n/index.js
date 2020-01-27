const jsdata = require('./front.js')
const fs = require('fs')
const XLSX = require('xlsx')
const _ = require('lodash')

let excelArr = []

fs.readFile('./前后台8号之后新增翻译-汇总1.xlsx', (err, data) => {
    if (err) throw err;
    const wb = XLSX.read(data, {
        type: 'buffer'
    })
    excelArr = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
    const resultObj = {}
    _.merge(resultObj, jsdata)
    for (const key1 in jsdata) {
        if (typeof jsdata[key1] === 'object') {
            for (const key2 in jsdata[key1]) {
                // if (key2 === 'temporaryApproveForm') {
                // debugger
                // }
                if (typeof jsdata[key1][key2] === 'object') {
                    for (const key3 in jsdata[key1][key2]) {
                        if (typeof jsdata[key1][key2][key3] === 'object') {
                            for (const key4 in jsdata[key1][key2][key3]) {
                                resultObj[key1][key2][key3][key4] = findEngByZh(jsdata[key1][key2][key3][key4])
                            }
                        } else {
                            resultObj[key1][key2][key3] = findEngByZh(jsdata[key1][key2][key3])
                        }
                    }
                } else {
                    // console.log(jsdata[key1][key2]);
                    resultObj[key1][key2] = findEngByZh(jsdata[key1][key2])
                }
            }
        } else {
            // console.log(jsdata[key1]);
            resultObj[key1] = findEngByZh(jsdata[key1])
        }
    }
    fs.writeFile('./result.json', JSON.stringify(resultObj), function () {
        console.log('写入完成');

    })
    // console.log(resultObj)
});

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