const express = require('express');
const models = require('../models');
const passport = require('passport');
require('../config/passport.js')(passport);

const router = express.Router();

//Authentication Protected API Point to GET Orders
router.get('/orders', passport.authenticate('jwt', { session: false }),
    //Everything in this function only occurs if user token is valid
    function(req, res) {
        models.Order.findAll({
	        where: {
	            CustomerEmail: req.user.email
	        }
    	}).then(function (orders, err) {
	    	res.json(orders);
   		 });
    }
)
  
  
module.exports = router;