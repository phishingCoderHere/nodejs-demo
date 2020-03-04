const express = require('express')
const router = express.Router()
const setMongoGetUser = require('../domain/user')
let mod = this
mod.mongoose = undefined
let User = undefined

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
        if (ret.length > 0) {
            res.redirect('/user/home.html')
        }
    })
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