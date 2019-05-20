const express = require('express');
const models = require('../models');
const passport = require('passport');
require('../config/passport.js')(passport);

const router = express.Router();

//Authentication Protected Order Page
router.get('/', passport.authenticate('jwt', { session: false }),
    //Everything in this function only occurs if user token is valid
    function(req, res) {
	    res.render('order-history');
   	}
);
    



module.exports = router;