'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    static associate(models) {
      this.belongsTo(models.Users, {
        foreignKey: {
          name: 'user_id',
        },
      });
      this.hasMany(models.OrderItems, {
        foreignKey: {
          name: 'order_id',
        },
      });
      this.hasMany(models.OrdersStatus, {
        foreignKey: {
          name: 'order_id',
        },
      });
    }
  }
  Orders.init(
    {
      user_id: DataTypes.INTEGER,
      order_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Orders',
    }
  );
  return Orders;
};
