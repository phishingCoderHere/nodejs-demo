const http = require('http')
const fs = require('fs')
const url = require('url')
const template = require('art-template')
const moment = require('moment')

const comments = [
    {
        name: '程序员张三',
        datetime: '2019年12月9日20:34',
        txt: '老铁技术牛逼啊~老铁技术牛逼啊~老铁技术牛逼啊~老铁技术牛逼啊~老铁技术牛逼啊~老铁技术牛逼啊~老铁技术牛逼啊~老铁技术牛逼啊~老铁技术牛逼啊~老铁技术牛逼啊~老铁技术牛逼啊~老铁技术牛逼啊~'
    },
    {
        name: '程序员李四',
        datetime: '2019年12月9日20',
        txt: '顶博主~!'
    }
]

const server = http.createServer(function (req, resp) {
    const urlobj = url.parse(req.url, true)
    if (urlobj.pathname === '/') {
        fs.readFile('HTTP服务器/comments/html/template.html', (err, buff) => {
            if (err) throw err
            var render = template.compile(buff.toString())
            var html = render({ comments })
            resp.end(html)
        })
    } else if (urlobj.pathname === '/comment') {
        console.log(urlobj.query.nick)
        console.log(urlobj.query.content)
        comments.push({
            name: urlobj.query.nick,
            datetime: moment().format('YYYY年MM月DD日hh:mm'),
            txt: urlobj.query.content
        })
        resp.statusCode = 302
        resp.setHeader('Location', '/')
        resp.end()
    }
}).listen(3000, () => {
    console.log('服务启动在3000端口....')
})