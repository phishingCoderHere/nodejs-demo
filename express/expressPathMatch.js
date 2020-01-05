var express = require('express')

var app = express()
app.get('/', (req, resp) => {
    console.log(req);
    resp.send('hello express')
})
app.get('/about', (req, resp) => {
    resp.send('express=>' + express)
})
app.use('/files/', express.static('./img/'))
app.listen(3000, function () {
    console.log('the server running on port 3000...');
})

