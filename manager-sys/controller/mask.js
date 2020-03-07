const express = require('express')
const router = express.Router()
const setMongoGetMask = require('../domain/mask')
const crud = require('../repository/mongooseCrud')
let mod = this
mod.mongoose = undefined
let Mask = undefined

router.post('/masks', (req, resp) => {
    const mask = req.body
    crud.insert(Mask, mask, () => {
        resp.status(200).end();
    })
})

router.get('/masks/:id', (req, resp) => {
    const id = req.params.id
    crud.removeById(Mask, id, () => {
        console.log(`删除操作：id:${id}`);
        resp.status(200).end();
    })
})


router.post('/masks/update', (req, resp) => {
    const mask = req.body
    crud.updateById(Mask, mask.id_, mask, (err, ret) => {
        if (err) {
            resp.status(500).end(err);
        }
        resp.status(200).end(ret);
    })
})

router.get('/masks', (req, resp) => {
    crud.find(Mask, req.params, (err, ret) => {
        if (err) {
            resp.status(500).end(err);
        }
        resp.status(200).end(ret);
    })
})

router.setMoongose = (mongoose) => {
    mod.mongoose = mongoose;
    Mask = setMongoGetMask(mongoose)
    return router
}

module.exports = router