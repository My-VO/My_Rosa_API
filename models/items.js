'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Items.init(
    {
      name: DataTypes.TEXT,
      price_potted: DataTypes.BIGINT,
      price_bare_root: DataTypes.BIGINT,
      variety: DataTypes.TEXT,
      perfume: DataTypes.TEXT,
      size: DataTypes.TEXT,
      color: DataTypes.TEXT,
      description: DataTypes.TEXT,
      plantation_care: DataTypes.TEXT,
      ideal_for: DataTypes.TEXT,
      stock_quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Items',
    }
  );
  return Items;
};
