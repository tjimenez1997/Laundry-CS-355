const express = require('express');
const models = require('../models');
const passport = require('passport');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('schedule');
});

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const {address, pickup, dropoff, washdry, dryclean} = req.body;
    models.Order.create({status:'New', customer: req.user.email, address, pickup, dropoff, washdry, dryclean})
        .then(()=> {
            res.json({success: true});
        });
});
  
module.exports = router;