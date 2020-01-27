const exp = {}
exp.updateById = function updateById(obj, id, newObj, callback) {
    obj.findByIdAndUpdate(id, newObj, (err, ret) => {
        callback(err, ret)
    })
}

exp.insert = function insert(Obj, row, callback) {
    const kitty = new Obj(row);
    kitty.save().then(() => callback());
}

exp.findOne = function findOne(obj, criteria, callback) {
    obj.findOne(criteria, (err, ret) => {
        callback(err, ret)
    })
}
exp.findById = function findById(obj, id, callback) {
    obj.findById(id, (err, ret) => {
        callback(err, ret)
    })
}

exp.find = function find(obj, criteria, callback) {
    obj.find(criteria, (err, ret) => {
        callback(err, ret)
    })
}

exp.deleteByCriteria = function deleteByCriteria(obj, criteria, callback) {
    obj.remove(criteria, (err, ret) => {
        callback(err, ret)
    })
}

exp.findByIdAndRemove = function findByIdAndRemove(obj, id, callback) {
    obj.findByIdAndRemove(id, (err, ret) => {
        callback(err, ret)
    })
}

module.exports = exp
