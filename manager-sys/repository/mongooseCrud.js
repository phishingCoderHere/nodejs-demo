
/**
 * 
 * @param {*} obj 
 * @param {*} id 
 * @param {*} newObj 
 * @param {*} callback 
 */
function updateById(modal, id, entity, callback) {
    modal.findByIdAndUpdate(id, entity, (err, ret) => {
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