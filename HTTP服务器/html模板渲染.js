var http = require('http')
var fs = require('fs')
var moment = require('moment')
var template = require('art-template')

var serverInstance = http.createServer()
var port = 3000

serverInstance.listen(port, function () {
    console.log('服务器运行在:' + port + '上面...........')
})


serverInstance.on('request', (req, res) => {
    // if (req.url === '/') {
    //     open('html/index.html', res)
    // } else {
    open(req.url, res)
    // }
    function open(url, res) {
        const htmlDir = 'D:/DoyoGames'
        const path = htmlDir + url + '/'
        fs.readdir(path, (err, filesName) => {
            if (err) {
                console.log(err)
                res.end('404 Not Found!')
            }
            else {
                const filesInfo = []
                filesName.forEach(fileName => {
                    const f = fs.statSync(path + '/' + fileName)
                    const info = {
                        name: fileName,
                        fileLocation: url +'/' + fileName,
                        size: f.size,
                        modifyTime: moment(f.mtime).format('YYYY年MM月DD日 hh:mm:ss'),
                        type: f.isFile() ? 'file' : 'dir'
                    }
                    filesInfo.push(info)
                })
                let render = template.compile(fs.readFileSync('./HTTP服务器/html/template.html').toString())
                let html = render({ path, files: filesInfo })
                res.end(html);
            }
        })
    }
})