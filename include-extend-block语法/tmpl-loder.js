const art = require('art-template')
const express = require('express')
const path = require('path')

const app = express()
app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, '/views/'))



app.listen(3000, () => {
    console.log('server is running... port:3000');

})

app.get('/', function (req, resp) {
    resp.render('index.html')
})

app.get('/list', function (req, resp) {
    resp.render('list.html')
})