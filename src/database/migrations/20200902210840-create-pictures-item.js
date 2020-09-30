module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Pictures_Item", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      item_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: {
            tableName: "Items",
          },
          key: "item_id",
        },
      },
      item_type: {
        allowNull: false,
        type: Sequelize.TEXT,
        onDelete: "CASCADE",
        references: {
          model: {
            tableName: "Items",
          },
          key: "item_type",
        },
      },
      picture: {
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
    await queryInterface.dropTable("Pictures_Item");
  },
};
