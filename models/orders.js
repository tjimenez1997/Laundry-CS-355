'use strict';
module.exports = (sequelize, DataTypes) => {
  //Table Column Description:
  //orderdata_id: Holds a id for more information about this specific order (Orderdata holds laundry service type)
  //status_id: Holds id for a status table. This will be used to update current status of a order
  //customer_id: Customer ID associated with this particular order
  //worker_id: Worker ID associated with this particular order
  //pickuptime: Final Pickup Time
  //deliverytime: Final Delivery Time
  const Orders = sequelize.define('Orders', {
    orderdata_id: DataTypes.INTEGER, 
    status_id: DataTypes.INTEGER,
    customer_id: DataTypes.INTEGER,
    worker_id: DataTypes.INTEGER,
    pickuptime: DataTypes.TIME,
    deliverytime: DataTypes.TIME
  }, {});
  Orders.associate = function(models) {
    // associations can be defined here
  };
  return Orders;
};