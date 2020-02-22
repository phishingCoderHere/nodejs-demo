var http = require('http')

var serverInstance = http.createServer()

var port = 3000

serverInstance.listen(port, function () {
    console.log('服务器运行在:' + port + '上面...........')
})

serverInstance.on('request', (req, res) => {
    console.log('接收到请求了！')
    console.log(req.url)
    const obj = {
        name: 'guo',
        age: 25
    }
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.end(JSON.stringify(obj))
})