module.exports = (sequelize, DataTypes) => {
  const OrdersStatus = sequelize.define(
    'OrdersStatus',
    {
      orderId: {
        field: 'order_id',
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      statusId: {
        field: 'status_id',
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      statusDate: {
        field: 'status_date',
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
      tableName: 'Orders_Status',
    }
  );

  OrdersStatus.associate = (models) => {
    OrdersStatus.belongsTo(models.Orders, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'orderId',
      },
    });
    OrdersStatus.belongsTo(models.Status, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'statusId',
        allowNull: false,
      },
    });
  };

  return OrdersStatus;
};
