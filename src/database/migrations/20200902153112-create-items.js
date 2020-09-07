'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Items', {
      item_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.TEXT,
      },
      price_pot: {
        type: Sequelize.BIGINT,
      },
      stock_quantity_pot: {
        type: Sequelize.INTEGER,
      },
      price_root: {
        type: Sequelize.BIGINT,
      },
      stock_quantity_root: {
        type: Sequelize.INTEGER,
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
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Items');
  },
};
