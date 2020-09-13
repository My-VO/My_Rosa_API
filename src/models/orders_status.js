module.exports = (sequelize, DataTypes) => {
  const OrdersStatus = sequelize.define(
    "OrdersStatus",
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
      },
      statusId: {
        field: "status_id",
        allowNull: false,
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
      tableName: "Orders_Status",
    }
  );

  OrdersStatus.associate = (models) => {
    OrdersStatus.belongsTo(models.Orders, {
      onDelete: "CASCADE",
      foreignKey: {
        name: "orderId",
        allowNull: false,
      },
    });
    OrdersStatus.belongsTo(models.Status, {
      onDelete: "CASCADE",
      foreignKey: {
        name: "statusId",
        allowNull: false,
      },
    });
  };

  return OrdersStatus;
};
