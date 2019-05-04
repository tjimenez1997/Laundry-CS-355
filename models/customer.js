//var bcrypt = require("bcrypt-nodejs");
const bcrypt = require('bcrypt');
const saltRounds = 10;
'use strict';
module.exports = (sequelize, DataTypes) => {
  //Add Validation (Serverside) + Also check via frontend
  const Customer = sequelize.define('Customer', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.TEXT,
    address: DataTypes.STRING,
    zipcode: DataTypes.INTEGER
    
  }, {});

  Customer.beforeSave((customer, options)=> {
         if (customer.changed('password')) {
      customer.password = bcrypt.hashSync(customer.password, bcrypt.genSaltSync(10), null);
      console.log(customer.password);
    }

        /*if(customer.changed('password')){
          customer.password = 
        }
        bcrypt.hash(customer.password, saltRounds, function(err, hash) {
          console.log("This is the hash: " + hash);
          customer.password = hash;
        });*/


  });

  //Clean this code up
  Customer.prototype.comparePassword = function(input, cb){
    bcrypt.compare(input, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
  };



  Customer.associate = function(models) {
    // associations can be defined here
  };
  return Customer;
};