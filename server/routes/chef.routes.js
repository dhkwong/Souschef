const express = require('express');
const router = express.Router();
const chefs = require('./../controllers/chefs');

router.get('/', chefs.all)
    .get('/:id', chefs.getOneById)
    .post('/', chefs.create)
    .put('/:id', chefs.update)
    .delete('/:id', chefs.delete)

module.exports = router;
