const express = require('express');
const models = require('../models');
const passport = require('passport');

const router = express.Router();

router.get('/', (req, res, next) => {
    passport.authenticate('jwt', {session: false}, function (err, user, info, status) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.render('sign-up');
        }
        res.redirect('/order-history');
    })(req, res, next);
});

//Register Page POST Route
router.post('/', (req, res) => {
  let input = req.body;
  let taskerSignup = input.taskerFirstName;
  if(taskerSignup){
  		models.Worker.create({firstname: input.taskerFirstName, lastname: input.taskerLastName, email: input.taskerEmailAddress, phone: input.taskerPhoneNumber, password: input.taskerPassword, address: input.taskerAddress})
  		.then(function(){
    		res.json({ msg: "Successfully added worker account to database." });
  		});
  } else { 
  		models.Customer.create({firstname: input.firstName, lastname: input.lastName, email: input.emailAddress, phone: input.phoneNumber, password: input.password, address: input.address})
  		.then(function(){
    		res.json({ msg: "Successfully added customer account to database." });
  		});
  }



 
});


module.exports = router;