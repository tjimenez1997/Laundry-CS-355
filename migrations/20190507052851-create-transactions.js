'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      transactions_timestamp: {
        type: Sequelize.DATE
      },
      transactions_method: {
        type: Sequelize.STRING
      },
      transactions_subtotal: {
        type: Sequelize.REAL
      },
      transactions_serviceFee: {
        type: Sequelize.REAL
      },
      transactions_total: {
        type: Sequelize.REAL
      },
      transactions_isPaid: {
        type: Sequelize.REAL
      },
      orderID: {
        type: Sequelize.INTEGER
      },
      customerID: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Transactions');
  }
};