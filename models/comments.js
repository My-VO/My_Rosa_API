'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
