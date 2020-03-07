const express = require('express')
const md5 = require('md5')
const router = express.Router()
const setMongoGetUser = require('../domain/user')
let mod = this
mod.mongoose = undefined
let User = undefined

router.get('/*', function (req, res) {
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
router.get('/', function (req, res) {
    res.render('welcome.html')
})
router.get('/login', function (req, res) {
    res.render('login/login.html')
})
router.post('/login', function (req, res) {
    const uname = req.body.username
    const pwd = req.body.password
    User.find({ username: uname }, (err, ret) => {
        err && console.error(err)
        if (ret.length > 0 && md5(pwd) === ret[0].password) {
            req.session.isLogin = true;
            return res.render('user/home.html')
        }
        res.redirect('/login')
    })
})
router.post('/signin', function (req, res) {
    req.body.password = md5(req.body.password)
    const newUser = new User(req.body)
    newUser.save().then(() => res.redirect("/login"))
})
router.get('/sign', function (req, res) {
    res.render('sign/sign.html')
})
router.setMoongose = (mongoose) => {
    mod.mongoose = mongoose;
    User = setMongoGetUser(mongoose)
    return router
}

module.exports = router