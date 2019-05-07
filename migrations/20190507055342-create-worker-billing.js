'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('WorkerBillings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      wBillingType1: {
        type: Sequelize.BOOLEAN
      },
      wBillingType1data: {
        type: Sequelize.STRING
      },
      wBillingType2: {
        type: Sequelize.BOOLEAN
      },
      wBillingType2data: {
        type: Sequelize.STRING
      },
      workerID: {
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
    return queryInterface.dropTable('WorkerBillings');
  }
};