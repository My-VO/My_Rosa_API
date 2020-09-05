'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      this.hasMany(models.ContactInfo, {
        foreignKey: {
          name: 'user_id',
        },
      });
      this.hasMany(models.Comments, {
        foreignKey: {
          name: 'user_id',
        },
      });
      this.hasMany(models.Orders, {
        foreignKey: {
          name: 'user_id',
        },
      });
    }
  }
  Users.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Users',
    }
  );
  return Users;
};
