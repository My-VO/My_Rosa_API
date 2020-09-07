module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define(
    'Orders',
    {
      orderId: {
        field: 'order_id',
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        field: 'user_id',
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      orderDate: {
        field: 'order_date',
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
      tableName: 'Orders',
    }
  );

  Orders.associate = (models) => {
    Orders.belongsTo(models.Users, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'userId',
        allowNull: false,
      },
    });
    Orders.hasMany(models.OrderItems);
    Orders.hasMany(models.OrdersStatus);
  };

  return Orders;
};
