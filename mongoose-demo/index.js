const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });

const Cat = mongoose.model('Cat', { name: String, date: String });

// insert(Cat, { name: 'Zildjian', date: new Date() }, () => {
// console.log('插入一条数据');
// });

// find(Cat, { name: 'Zildjian' }, (err, ret) => {
//     if (err) {
//         console.error(err)
//         return;
//     }
//     console.log(ret);
// })

deleteByCriteria(Cat, { 'name': 'Zildjian' }, (err, ret) => {
    if (err) {
        console.error(err)
        return;
    }
    console.log(ret);
})

// updateById(Cat, '5e2e6e216ac64305288a9c97', { name: '郭天昊', date: new Date() }, (err, ret) => {
//     if (err) {
//         console.error(err)
//         return;
//     }
//     console.log(ret);
// })

function updateById(obj, id, newObj, callback) {
    obj.findByIdAndUpdate(id, newObj, (err, ret) => {
        callback(err, ret)
    })
}

function insert(Obj, row, callback) {
    const kitty = new Obj(row);
    kitty.save().then(() => callback());
}

function findOne(obj, criteria, callback) {
    obj.findOne(criteria, (err, ret) => {
        callback(err, ret)
    })
}

function find(obj, criteria, callback) {
    obj.find(criteria, (err, ret) => {
        callback(err, ret)
    })
}

function deleteByCriteria(obj, criteria, callback) {
    obj.remove(criteria, (err, ret) => {
        callback(err, ret)
    })
}