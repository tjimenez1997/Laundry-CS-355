'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Reviews', {
    review_id: DataTypes.INTEGER,
    customer_id: DataTypes.INTEGER,
    worker_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
    rating: DataTypes.INTEGER
  }, {});
  Reviews.associate = function(models) {
    // associations can be defined here
  };
  return Reviews;
};