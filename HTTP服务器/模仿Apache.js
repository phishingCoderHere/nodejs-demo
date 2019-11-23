var http = require('http')
var fs = require('fs')

var serverInstance = http.createServer()
var port = 3000

serverInstance.listen(port, function () {
    console.log('服务器运行在:' + port + '上面...........')
})


serverInstance.on('request', (req, res) => {
    console.log(req.url)
    if (req.url === '/') {
        open('html/index.html', res)
    } else {
        open(req.url, res)
    }
    function open(fileName, res) {
        const htmlDir = './HTTP服务器/'
        fs.readFile(htmlDir + fileName, (err, data) => {
            if (err) {
                console.log(err)
                res.end('404 Not Found!')
            }
            res.end(data);
        })
    }
})