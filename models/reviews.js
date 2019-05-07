'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Reviews', {
    customer_id: DataTypes.INTEGER,
    worker_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
    rating: DataTypes.INTEGER
  }, {});
  Reviews.associate = function(models) {
    Reviews.hasMany(models.Orders);
    Reviews.hasMany(models.Customer);
    Reviews.hasMany(models.Workers);
  };
  return Reviews;
};