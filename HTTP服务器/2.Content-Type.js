var http = require('http')

var serverInstance = http.createServer()
var port = 3000

serverInstance.listen(port, function() {
    console.log('服务器运行在:'+port+'上面...........')
})

serverInstance.on('request', (req, res) => {
    console.log('接收到请求了！')
    console.log(req.url)
    var html = '<p style="color:#ffeedd">你好世界</p>'
    if(req.url === '/html') {
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(html)
    } else if(req.url === '/txt') {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(html)
    }
})