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
      statusDate: {
        field: "status_date",
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
    OrdersStatus.belongsTo(models.Orders);
    OrdersStatus.belongsTo(models.Status);
  };

  return OrdersStatus;
};
