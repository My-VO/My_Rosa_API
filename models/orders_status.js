'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders_Status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Orders_Status.init(
    {
      order_id: DataTypes.INTEGER,
      status_id: DataTypes.TEXT,
      status_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Orders_Status',
    }
  );
  return Orders_Status;
};
