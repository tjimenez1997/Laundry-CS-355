'use strict';
module.exports = (sequelize, DataTypes) => {
  //Table Column Description:
  //orderdata_id: Holds a id for more information about this specific order.OrderData holds laundry service type)
  //status_id: Holds id for a status table. This will be used to update current status of a order
  //customer_id: Customer ID associated with this particular order
  //worker_id: Worker ID associated with this particular order
  //pickuptime: Final Pickup Time
  //deliverytime: Final Delivery Time
  const Order = sequelize.define('Order', {
    pickuptime: DataTypes.TIME,
    deliverytime: DataTypes.TIME
  }, {});
  Order.associate = function(models) {
    Order.belongsTo(models.Customer);
    Order.belongsTo(models.Worker);
    Order.belongsTo(models.Status);
  };
  return Order;
};