'use strict';
module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    type: DataTypes.STRING
  }, {});
  Status.associate = function(models) {
    Status.belongsTo(models.Orders);
  };
  return Status;
};