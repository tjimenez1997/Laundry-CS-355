'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderData = sequelize.define('OrderData', {
    orderData_type1: DataTypes.BOOLEAN,
    orderData_type1Amount: DataTypes.INTEGER,
    orderData_type1Price: DataTypes.REAL,
    orderData_type2: DataTypes.BOOLEAN,
    orderData_type2Amount: DataTypes.INTEGER,
    orderData_type2Price: DataTypes.REAL,
    orderData_type3: DataTypes.BOOLEAN,
    orderData_type3Amount: DataTypes.INTEGER,
    orderData_type3Price: DataTypes.REAL
  }, {});
  OrderData.associate = function(models) {
    OrderData.belongsTo(models.Order);
  };
  return OrderData;
};