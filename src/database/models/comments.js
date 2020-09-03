'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    static associate(models) {
      this.belongsTo(models.Users, {
        foreignKey: {
          name: 'user_id',
        },
      });
      this.belongsTo(models.Items, {
        foreignKey: {
          name: 'item_id',
        },
      });
    }
  }
  Comments.init(
    {
      user_id: DataTypes.INTEGER,
      item_id: DataTypes.INTEGER,
      comment: DataTypes.TEXT,
      picture: DataTypes.TEXT,
      date_creation: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Comments',
    }
  );
  return Comments;
};
