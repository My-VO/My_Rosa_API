'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contact_Info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Contact_Info.init(
    {
      delivery_address: DataTypes.TEXT,
      bill_address: DataTypes.TEXT,
      phone_number: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Contact_Info',
    }
  );
  return Contact_Info;
};
