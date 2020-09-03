'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PicturesItem extends Model {
    static associate(models) {
      this.belongsTo(models.Items, {
        foreignKey: {
          name: 'item_id',
        },
      });
    }
  }
  PicturesItem.init(
    {
      item_id: DataTypes.INTEGER,
      picture: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'PicturesItem',
    }
  );
  return PicturesItem;
};
