const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
    models.Order.findAll({
        where: {
            CustomerEmail: req.user.email
        }
    }).then(function (err, orders) {
        res.render('order-history', {orders});
    });
});


module.exports = router;