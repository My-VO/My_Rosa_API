'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItems extends Model {
    static associate(models) {
      this.belongsTo(models.Items, {
        foreignKey: {
          name: 'item_id',
        },
      });
      this.belongsTo(models.Orders, {
        foreignKey: {
          name: 'order_id',
        },
      });
    }
  }
  OrderItems.init(
    {
      order_id: DataTypes.INTEGER,
      item_id: DataTypes.INTEGER,
      quantity_order: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'OrderItems',
    }
  );
  return OrderItems;
};
