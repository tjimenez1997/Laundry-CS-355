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
  Customer.associate = function(models) {
    // associations can be defined here
  };
  return Customer;
};