'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pictures_Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pictures_Item.init(
    {
      item_id: DataTypes.INTEGER,
      picture: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Pictures_Item',
    }
  );
  return Pictures_Item;
};
