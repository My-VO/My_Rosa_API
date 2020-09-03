'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ContactInfos', {
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          allowNull: false,
          model: {
            tableName: 'Users',
          },
          key: 'user_id',
        },
      },
      delivery_address: {
        type: Sequelize.TEXT,
      },
      bill_address: {
        type: Sequelize.TEXT,
      },
      phone_number: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('ContactInfos');
  },
};
