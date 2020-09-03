'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContactInfo extends Model {
    static associate(models) {
      this.belongsTo(models.Users, {
        foreignKey: {
          name: 'user_id',
        },
      });
    }
  }
  ContactInfo.init(
    {
      delivery_address: DataTypes.TEXT,
      bill_address: DataTypes.TEXT,
      phone_number: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'ContactInfo',
    }
  );
  return ContactInfo;
};
