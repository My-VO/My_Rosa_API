'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Items extends Model {
    static associate(models) {
      this.hasMany(models.Comments, {
        foreignKey: {
          name: 'item_id',
        },
      });
      this.hasMany(models.PicturesItem, {
        foreignKey: {
          name: 'item_id',
        },
      });
      this.hasMany(models.OrderItems, {
        foreignKey: {
          name: 'item_id',
        },
      });
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
