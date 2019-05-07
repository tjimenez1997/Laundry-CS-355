'use strict';
module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    name: {type: DataTypes.STRING, primaryKey: true}
  }, {});
  Status.associate = function(models) {
  };
  return Status;
};