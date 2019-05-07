'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CustomerBillings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cBillingType1: {
        type: Sequelize.BOOLEAN
      },
      cBillingType1data: {
        type: Sequelize.STRING
      },
      cBillingType2: {
        type: Sequelize.BOOLEAN
      },
      cBillingType2data: {
        type: Sequelize.STRING
      },
      customerID: {
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
    return queryInterface.dropTable('CustomerBillings');
  }
};