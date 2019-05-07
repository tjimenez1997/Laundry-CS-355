'use strict';
module.exports = (sequelize, DataTypes) => {
  const WorkerBilling = sequelize.define('WorkerBilling', {
    wBillingType1: DataTypes.BOOLEAN,
    wBillingType1data: DataTypes.STRING,
    wBillingType2: DataTypes.BOOLEAN,
    wBillingType2data: DataTypes.STRING,
    workerID: DataTypes.INTEGER
  }, {});
  WorkerBilling.associate = function(models) {
    WorkerBilling.hasMany(models.Workers);
  };
  return WorkerBilling;
};