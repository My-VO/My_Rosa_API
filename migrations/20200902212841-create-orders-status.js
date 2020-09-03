'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('OrdersStatuses', {
      order_id: {
        type: Sequelize.INTEGER,
        references: {
          allowNull: false,
          model: {
            tableName: 'Orders',
          },
          key: 'order_id',
        },
      },
      status_id: {
        type: Sequelize.TEXT,
        references: {
          allowNull: false,
          model: {
            tableName: 'Status',
          },
          key: 'status_id',
        },
      },
      status_date: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('OrdersStatuses');
  },
};
