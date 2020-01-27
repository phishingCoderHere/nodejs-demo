const fs = require('fs')
const rl = require('readline')

const map = []
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
    map.push({ name: varname, value: varvalue })
  }
})

reader.on('close', function () {
  console.log('关闭输入流...');
  console.log(map.length);
})

