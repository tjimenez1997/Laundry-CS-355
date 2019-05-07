const bcrypt = require('bcrypt');
const saltRounds = 10;
'use strict';
module.exports = (sequelize, DataTypes) => {
  //Table Column Description
  //firstname: Holds first name of account
  //lastname: Holds last name of account
  //phone: Holds phone number for account
  //email: Holds email for account
  //password: Holds password (bcrypt hashed) for account
  //address: Holds address for account
  //zipcode: Holds zipcode of address for the account
  const Customer = sequelize.define('Customer', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: {type: DataTypes.STRING, primaryKey: true},
    password: DataTypes.TEXT,
    address: DataTypes.STRING,
    zipcode: DataTypes.INTEGER
  }, {});

  Customer.beforeSave((customer, options)=> {
      if (customer.changed('password')) {
          customer.password = bcrypt.hashSync(customer.password, bcrypt.genSaltSync(10), null);
      }
  });

  Customer.prototype.comparePassword = function(input, cb){
    bcrypt.compare(input, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
  };

  Customer.associate = function(models) {

  };
  return Customer;
};