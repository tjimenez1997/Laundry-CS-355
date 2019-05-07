'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    transactions_timestamp: DataTypes.DATE,
    transactions_method: DataTypes.STRING,
    transactions_subtotal: DataTypes.REAL,
    transactions_serviceFee: DataTypes.REAL,
    transactions_total: DataTypes.REAL,
    transactions_isPaid: DataTypes.REAL,
  }, {});
  Transaction.associate = function(models) {
    Transaction.belongsTo(models.Order);
    Transaction.belongsTo(models.Customer);
    Transaction.belongsTo(models.Worker);
  };
  return Transaction;
};