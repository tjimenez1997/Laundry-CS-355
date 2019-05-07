'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('OrderData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderData_type1: {
        type: Sequelize.BOOLEAN
      },
      orderData_type1Amount: {
        type: Sequelize.INTEGER
      },
      orderData_type1Price: {
        type: Sequelize.REAL
      },
      orderData_type2: {
        type: Sequelize.BOOLEAN
      },
      orderData_type2Amount: {
        type: Sequelize.INTEGER
      },
      orderData_type2Price: {
        type: Sequelize.REAL
      },
      orderData_type3: {
        type: Sequelize.BOOLEAN
      },
      orderData_type3Amount: {
        type: Sequelize.INTEGER
      },
      orderData_type3Price: {
        type: Sequelize.REAL
      },
      order_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('OrderData');
  }
};