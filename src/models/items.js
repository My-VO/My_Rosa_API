module.exports = (sequelize, DataTypes) => {
  const Items = sequelize.define(
    'Items',
    {
      itemId: {
        field: 'item_id',
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      pricePot: {
        field: 'price_pot',
        allowNull: false,
        type: DataTypes.BIGINT,
      },
      stockQuantityPot: {
        field: 'stock_quantity_pot',
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      priceRoot: {
        field: 'price_root',
        allowNull: false,
        type: DataTypes.BIGINT,
      },
      stockQuantityRoot: {
        field: 'stock_quantity_root',
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      variety: {
        type: DataTypes.TEXT,
      },
      perfume: {
        type: DataTypes.TEXT,
      },
      size: {
        type: DataTypes.TEXT,
      },
      color: {
        type: DataTypes.TEXT,
      },
      description: {
        type: DataTypes.TEXT,
      },
      plantationCare: {
        field: 'plantation_care',
        type: DataTypes.TEXT,
      },
      idealFor: {
        field: 'ideal_for',
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
      tableName: 'Items',
    }
  );
  Items.associate = (models) => {
    Items.hasMany(models.Comments);
    Items.hasMany(models.PicturesItem);
    Items.hasMany(models.OrderItems);
  };

  return Items;
};
