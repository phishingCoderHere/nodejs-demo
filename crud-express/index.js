const express = require('express')
const bodyParser = require('body-parser')
const mdb = require('./mdb')
const mongoose = require('mongoose');

const app = express()

app.engine('html', require('express-art-template'))
app.use('/node_modules', express.static('./node_modules'))
app.use('/public', express.static('./public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/students', { useNewUrlParser: true });

const Student = mongoose.model('Student', { name: String, gender: String, age: Number, hobbies: String });

app.listen(3000, function () {
    console.log("server running...");
})
let students = []
app.get('/', function (req, resp) {
    mdb.find(Student, {}, function name(err, buff) {
        if (err) {
            return resp.status(500).send('server error!')
        }
        resp.render('index.html', { students: buff })
    })
})

app.get('/new', function (req, resp) {
    resp.render('new.html')
})

app.post('/add', function (req, resp) {
    mdb.insert(Student, req.body, (err) => {
        if (err) {
            return resp.status(500).send('添加失败！')
        }
    })
    resp.redirect('/')
})

app.get('/delete', function (req, resp) {
    mdb.findByIdAndRemove(Student, req.query.id, (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        if (!result) {
            return resp.status(500).send('删除失败！')
        }
    })
    resp.redirect('/')
})

app.get('/edit', function (req, resp) {
    const id = req.query.id
    mdb.findById(Student, id, (err, result) => {
        if (err) {
            console.log(err);
            return resp.status(500).send('没有找到！')
        }
        resp.render('edit.html', {
            student: result
        })
    })
})

app.post('/update', function (req, resp) {
    const id = req.body.id
    mdb.updateById(Student, id, req.body, (err, ret) => {
        if (err) {
            console.log(err);
            return resp.status(500).send('修改失败！')
        }
    })
    resp.redirect('/')
})