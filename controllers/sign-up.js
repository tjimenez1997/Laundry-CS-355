const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('sign-up');
});

//Register Page POST Route
router.post('/', (req, res) => {
  let input = req.body;
  let taskerSignup = input.taskerFirstName;
  if(taskerSignup){
  		models.Workers.create({firstname: input.taskerFirstName, lastname: input.taskerLastName, email: input.taskerEmailAddress, phone: input.taskerPhoneNumber, password: input.taskerPassword, address: input.taskerAddress})
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