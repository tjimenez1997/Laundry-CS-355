'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transactions = sequelize.define('Transactions', {
    transactions_timestamp: DataTypes.DATE,
    transactions_method: DataTypes.STRING,
    transactions_subtotal: DataTypes.REAL,
    transactions_serviceFee: DataTypes.REAL,
    transactions_total: DataTypes.REAL,
    transactions_isPaid: DataTypes.REAL,
    orderID: DataTypes.INTEGER,
    customerID: DataTypes.INTEGER,
    workerID: DataTypes.INTEGER
  }, {});
  Transactions.associate = function(models) {
    Transactions.hasMany(models.Orders);
    Transactions.hasMany(models.Customer);
    Transactions.hasMany(models.Workers);
  };
  return Transactions;
};