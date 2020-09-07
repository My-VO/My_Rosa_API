module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Contact_Info', {
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
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
    await queryInterface.dropTable('Contact_Info');
  },
};
