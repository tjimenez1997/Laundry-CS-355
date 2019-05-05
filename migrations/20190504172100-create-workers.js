'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Workers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.TEXT
      },
      address: {
        type: Sequelize.STRING
      },
      zipcode: {
        type: Sequelize.INTEGER
      },
      available: {
        type: Sequelize.BOOLEAN
      },
      average_rating: {
        type: Sequelize.DECIMAL
      },
      rating_count: {
        type: Sequelize.INTEGER
      },
      pending_task: {
        type: Sequelize.INTEGER
      },
      completed_tasks: {
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
    return queryInterface.dropTable('Workers');
  }
};