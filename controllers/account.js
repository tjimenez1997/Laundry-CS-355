const express = require('express');
const models = require('../models');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const passport = require('passport');
require('../config/passport.js')(passport); 

const router = express.Router();


router.get('/', (req, res) => {
  res.render('account');
});

//Protected Sign Out Get Route (You can only access if you are signed in)
router.get('/signout', passport.authenticate('jwt', { session: false }),
    //Everything in this function only occurs if user token is valid
    function(req, res) {
        res.clearCookie('authToken'); //In the future use refresh token?
        res.redirect('/');
    }
)


module.exports = router;
