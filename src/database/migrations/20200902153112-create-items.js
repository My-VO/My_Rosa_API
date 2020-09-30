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
      item_type: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.TEXT,
      },
      name: {
        type: Sequelize.TEXT,
      },
      price: {
        type: Sequelize.BIGINT,
      },
      stock_quantity: {
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
    // .then(() => {
    //   return queryInterface.sequelize.query(
    //     'ALTER TABLE "Items" ADD CONSTRAINT "itemPk" PRIMARY KEY ("item_id", "item_type")'
    //   );
    // });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Items");
  },
};
