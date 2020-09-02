'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.TEXT,
      },
      price_potted: {
        type: Sequelize.BIGINT,
      },
      price_bare_root: {
        type: Sequelize.BIGINT,
      },
      variety: {
        type: Sequelize.TEXT,
      },
      perfume: {
        type: Sequelize.TEXT,
      },
      size: {
        type: Sequelize.TEXT,
      },
      color: {
        type: Sequelize.TEXT,
      },
      description: {
        type: Sequelize.TEXT,
      },
      plantation_care: {
        type: Sequelize.TEXT,
      },
      ideal_for: {
        type: Sequelize.TEXT,
      },
      stock_quantity: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Items');
  },
};
