const rl = require('readline')
const fs = require('fs')

const reader = rl.createInterface({
  input:fs.createReadStream('HTTP服务器/comments/data/comments.txt')
})
reader.on('line', arr => {
  console.log(arr+'\\n')
})