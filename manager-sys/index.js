const express = require('express')
const session = require('express-session')
const path = require('path')
const userCtrl = require('./controller/user')
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
app.use(userCtrl.setMoongose(mongoose))
app.use('/fonts', express.static(path.join(__dirname, '/', 'pages/login/fonts')))
app.use('/images', express.static(path.join(__dirname, '/', 'pages/login/images')))
app.use('/public', express.static(path.join(__dirname, '/', 'pages/login/public')))
app.use('/resources', express.static(path.join(__dirname, '/', 'pages/login/resources')))
app.use('/', express.static(path.join(__dirname, '/', 'pages/login/resources')))
app.set('views', path.join(__dirname, '/', 'pages'))


app.listen(8080, () => {
    console.log('server running on port 8080....');
})
