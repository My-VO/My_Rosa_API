module.exports = (sequelize, DataTypes) => {
  const PicturesItem = sequelize.define(
    "PicturesItem",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      itemId: {
        field: "item_id",
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      itemType: {
        field: "item_type",
        allowNull: false,
        type: DataTypes.TEXT,
      },
      picture: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      createdAt: {
        field: "create_at",
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        validate: {
          isDate: true,
          notNull: true,
        },
      },
      updatedAt: {
        field: "updated_at",
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        validate: {
          isDate: true,
          notNull: true,
        },
      },
    },
    {
      tableName: "Pictures_Item",
    }
  );

  PicturesItem.associate = (models) => {
    PicturesItem.belongsTo(models.Items, {
      onDelete: "CASCADE",
      foreignKey: {
        name: "itemId",
        allowNull: false,
      },
    });
    PicturesItem.belongsTo(models.Items, {
      onDelete: "CASCADE",
      foreignKey: {
        name: "itemType",
        allowNull: false,
      },
    });
  };

  return PicturesItem;
};
