'use strict';
module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define('Test', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    password: DataTypes.TEXT,
    zipcode: DataTypes.INTEGER,
    phone: DataTypes.INTEGER
  }, {});
  Test.associate = function(models) {
    // associations can be defined here
  };
  return Test;
};