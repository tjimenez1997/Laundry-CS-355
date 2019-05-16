const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('schedule');
});

router.post('/', (req, res) => {
    const {address, pickuptime, deliverytime, washdry, dryclean} = req.body;
    models.Order.create({StatusName: 'New', CustomerEmail: req.user.email, address, pickuptime, deliverytime, washdry, dryclean})
        .then(() => {
            res.json({success: true});
        });
});

module.exports = router;