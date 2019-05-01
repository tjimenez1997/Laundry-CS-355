const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('sign-up');
});

//Register Page POST Route
router.post('/', (req, res) => {
  let input = req.body;
  models.Customer.create({firstname: input.firstName, lastname: input.lastName, email: input.emailAddress, phone: input.phoneNumber, password: input.password, address: input.address}).then(function(){
    res.json({
    msg: "Successfully added account to database. (Todo: Figure out how front end will display success or fail message to user/Input validation/Proper password security practices)"
  });
  });
});


module.exports = router;