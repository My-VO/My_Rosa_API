module.exports = (sequelize, DataTypes) => {
  const OrderItems = sequelize.define(
    "OrderItems",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      orderId: {
        field: "order_id",
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "Orders",
          },
          key: "orderId",
        },
      },
      itemId: {
        field: "item_id",
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "Items",
          },
          key: "itemId",
        },
      },
      itemType: {
        field: "item_type",
        allowNull: false,
        type: DataTypes.TEXT,
        references: {
          model: {
            tableName: "Items",
          },
          key: "itemType",
      },
      quantityOrder: {
        allowNull: false,
        field: "quantity_order",
        type: DataTypes.INTEGER,
      },
      createdAt: {
        field: "created_at",
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
      tableName: "Order_Items",
    }
  );

  OrderItems.associate = (models) => {
    OrderItems.belongsTo(models.Items, {
      onDelete: "CASCADE",
      foreignKey: {
        name: "itemId",
        allowNull: false,
      },
    });
    OrderItems.belongsTo(models.Items, {
      onDelete: "CASCADE",
      foreignKey: {
        name: "itemType",
        allowNull: false,
      },
    });
    OrderItems.belongsTo(models.Orders, {
      onDelete: "CASCADE",
      foreignKey: {
        name: "orderId",
        allowNull: false,
      },
    });
  };

  return OrderItems;
};
