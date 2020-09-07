module.exports = (sequelize, DataTypes) => {
  const PicturesItem = sequelize.define(
    'PicturesItem',
    {
      item_id: {
        field: 'item_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Items',
          },
          key: 'item_id',
        },
      },
      picture: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      createdAt: {
        field: 'create_at',
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        validate: {
          isDate: true,
          notNull: true,
        },
      },
      updatedAt: {
        field: 'updated_at',
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
      tableName: 'Pictures_Item',
    }
  );

  PicturesItem.associate = (models) => {
    PicturesItem.belongsTo(models.Items, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'itemId',
        allowNull: false,
      },
    });
  };

  return PicturesItem;
};
