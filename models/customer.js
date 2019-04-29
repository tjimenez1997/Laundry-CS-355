'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
    },
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.TEXT,
    address: DataTypes.STRING,
    zipcode: DataTypes.INTEGER,
    phone: DataTypes.INTEGER
  }, {});
  Customer.associate = function(models) {
    // associations can be defined here
  };
  return Customer;
};