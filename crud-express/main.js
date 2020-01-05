const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')

const app = express()

app.engine('html', require('express-art-template'))
app.use('/node_modules', express.static('./node_modules'))
app.use('/public', express.static('./public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(3000, function () {
    console.log("server running...");
})
let students = []
app.get('/', function (req, resp) {
    fs.readFile('./db/db.json', 'utf-8', function name(err, buff) {
        if (err) {
            return resp.status(500).send('server error!')
        }
        // console.log(buff);
        students = JSON.parse(buff).students
        resp.render('index.html', { students })
    })

})

app.get('/new', function (req, resp) {
    resp.render('new.html')
})
app.post('/add', function (req, resp) {
    let student = {}
    const id = (students.length + 1) + ''
    student.name = req.body.name
    student.gender = req.body.gender
    student.age = req.body.age
    student.id = id
    students.push(student)
    const stuStr = JSON.stringify({ students: students })
    fs.writeFile('./db/db.json', stuStr, (err) => {
        if (err) {
            return resp.status(500).send('修改失败！')
        }
    })
    resp.redirect('/')
})
app.get('/delete', function (req, resp) {
    const id = req.query.id
    let idx = 0
    const delStu = students.find((student, i) => {
        if (student.id === id) {
            idx = i
            return student
        }
    })
    students.splice(idx, 1)
    const stuStr = JSON.stringify({ students: students })
    fs.writeFile('./db/db.json', stuStr, (err) => {
        if (err) {
            return resp.status(500).send('修改失败！')
        }
    })
    resp.redirect('/')
})
app.get('/edit', function (req, resp) {
    const id = req.query.id
    resp.render('edit.html', {
        student: students.find(student => {
            if (student.id === id) {
                return student
            }
        })
    })
})
app.post('/update', function (req, resp) {
    const id = req.body.id
    const curStudent = students.find(student => {
        if (student.id === id) {
            return student
        }
    })
    curStudent.name = req.body.name
    curStudent.gender = req.body.gender
    curStudent.age = req.body.age
    const stuStr = JSON.stringify({ students: students })
    fs.writeFile('./db/db.json', stuStr, (err) => {
        if (err) {
            return resp.status(500).send('修改失败！')
        }
    })
    resp.redirect('/')

})