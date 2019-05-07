'use strict';
module.exports = (sequelize, DataTypes) => {
  const WorkerBilling = sequelize.define('WorkerBilling', {
    wBillingType1: DataTypes.BOOLEAN,
    wBillingType1data: DataTypes.STRING,
    wBillingType2: DataTypes.BOOLEAN,
    wBillingType2data: DataTypes.STRING
  }, {});
  WorkerBilling.associate = function(models) {
    WorkerBilling.belongsTo(models.Worker);
  };
  return WorkerBilling;
};