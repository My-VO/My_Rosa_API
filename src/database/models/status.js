'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    static associate(models) {
      this.hasMany(models.OrdersStatus, {
        foreignKey: {
          name: 'status_id',
        },
      });
    }
  }
  Status.init(
    {
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Status',
    }
  );
  return Status;
};
