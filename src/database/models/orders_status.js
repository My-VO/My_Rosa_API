'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrdersStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Orders, {
        foreignKey: {
          name: 'order_id',
        },
      });
      this.belongsTo(models.Status, {
        foreignKey: {
          name: 'status_id',
        },
      });
    }
  }
  OrdersStatus.init(
    {
      order_id: DataTypes.INTEGER,
      status_id: DataTypes.TEXT,
      status_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'OrdersStatus',
    }
  );
  return OrdersStatus;
};
