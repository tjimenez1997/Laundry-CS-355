const express = require('express');
const models = require('../models');
const passport = require('passport');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const router = express.Router();

router.get('/', (req, res) => {
    models.Order.findAll({
        where: {
            worker: null
        }
    }).then((err, orders) => {
        res.render('choose', {orders});
    });
});

module.exports = router;