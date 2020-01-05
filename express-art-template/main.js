const express = require('express')
const bodyParser = require('body-parser')
const moment = require('moment')

const app = express()

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

app.engine('html', require('express-art-template'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, resp) {
    console.log(comments);

    resp.render('comments.html', { comments })
})

// app.get('/shoppinglist', function (res, resp) {
//     resp.render('shoppinglist.html', {
//         list: [
//             { name: '沉默的大多数' },
//             { name: '汉尼拔' },
//             { name: '霍比特人' },
//         ]
//     })
// })

app.post('/comment', function (res, resp) {
    debugger
    console.log(res)
    const urlobj = res.body
    comments.push({
        name: urlobj.nick,
        datetime: moment().format('YYYY年MM月DD日hh:mm'),
        txt: urlobj.content
    })
    resp.redirect("/")
})

app.listen(3000, function () {
    console.log("server is running on port:3000");

})