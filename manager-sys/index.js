const express = require('express')
const session = require('express-session')
const path = require('path')
const userCtrl = require('./controller/user')
const maskCtrl = require('./controller/mask')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost:27017/managersystem', { useNewUrlParser: true });

const app = express()

app.engine('html', require('express-art-template'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
    secret: 'gth good',
    resave: false,
    saveUninitialized: true
}))



/* 声明控制器 */
app.use(userCtrl.setMoongose(mongoose))
app.use(maskCtrl.setMoongose(mongoose))

/**资源文件 */
app.use('/fonts', express.static(path.join(__dirname, '/', 'pages/login/fonts')))
app.use('/images', express.static(path.join(__dirname, '/', 'pages/login/images')))
app.use('/public', express.static(path.join(__dirname, '/', 'pages/login/public')))
app.use('/resources', express.static(path.join(__dirname, '/', 'pages/login/resources')))
app.use('/', express.static(path.join(__dirname, '/', 'pages/login/resources')))
app.set('views', path.join(__dirname, '/', 'pages'))

/**
 * 统一拦截
 */
app.get('/*', function (req, res) {
    if (!req.session.isLogin) {
        if (req.url.endsWith('.js') || req.url.endsWith('.css') ||
            req.url.endsWith('.woff') || req.url.endsWith('.woff2') ||
            req.url.endsWith('.jpg') || req.url.endsWith('.png')) {
            return req.next()
        }
        res.render('login/login.html')
    } else {
        req.next()
    }
})

app.listen(8081, () => {
    console.log('server running on port 8080....');
})
