const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
    models.Order.findAll({
        where: {
            worker: null
        }
    }).then((err, orders) => {
        res.render('find-work', {orders});
    });
});
  
  
module.exports = router;