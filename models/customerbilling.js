'use strict';
module.exports = (sequelize, DataTypes) => {
  const CustomerBilling = sequelize.define('CustomerBilling', {
    cBillingType1: DataTypes.BOOLEAN,
    cBillingType1data: DataTypes.STRING,
    cBillingType2: DataTypes.BOOLEAN,
    cBillingType2data: DataTypes.STRING,
    customerID: DataTypes.INTEGER
  }, {});
  CustomerBilling.associate = function(models) {
    CustomerBilling.belongsTo(models.Customer);
  };
  return CustomerBilling;
};