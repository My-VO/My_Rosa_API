"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Items", {
      item_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      price: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      stock_quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      variety: {
        type: Sequelize.TEXT,
      },
      perfume: {
        type: Sequelize.TEXT,
      },
      size_cm: {
        type: Sequelize.INTEGER,
      },
      color: {
        type: Sequelize.TEXT,
      },
      flowering: {
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
    await queryInterface.dropTable("Items");
  },
};
