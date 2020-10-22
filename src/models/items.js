module.exports = (sequelize, DataTypes) => {
  const Items = sequelize.define(
    "Items",
    {
      itemId: {
        field: "item_id",
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      type: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      price: {
        allowNull: false,
        type: DataTypes.DOUBLE(3, 2),
      },
      stockQuantity: {
        field: "stock_quantity",
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
        field: "size_cm",
        type: DataTypes.INTEGER,
      },
      color: {
        type: DataTypes.TEXT,
      },
      flowering: {
        type: DataTypes.TEXT,
      },
      description: {
        type: DataTypes.TEXT,
      },
      plantationCare: {
        field: "plantation_care",
        type: DataTypes.TEXT,
      },
      idealFor: {
        field: "ideal_for",
        type: DataTypes.TEXT,
      },
      createdAt: {
        field: "create_at",
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        validate: {
          isDate: true,
        },
      },
      updatedAt: {
        field: "updated_at",
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        validate: {
          isDate: true,
        },
      },
    },
    {
      tableName: "Items",
    }
  );
  Items.associate = (models) => {
    Items.hasMany(models.Comments, {
      onDelete: "CASCADE",
      foreignKey: {
        name: "itemId",
        allowNull: false,
      },
    });
    Items.hasMany(models.PicturesItem, {
      onDelete: "CASCADE",
      foreignKey: {
        name: "itemId",
        allowNull: false,
      },
    });
    Items.hasMany(models.OrderItems, {
      onDelete: "CASCADE",
      foreignKey: {
        name: "itemId",
        allowNull: false,
      },
    });
  };
  Items.removeAttribute("id");
  return Items;
};
