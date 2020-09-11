module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define(
    "Comments",
    {
      commentId: {
        field: "comment_id",
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        validate: {
          notNull: true,
        },
      },
      userId: {
        field: "user_id",
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      itemId: {
        field: "item_id",
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      comment: {
        type: DataTypes.TEXT,
      },
      picture: {
        type: DataTypes.TEXT,
      },
      createdAt: {
        field: "create_at",
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        validate: {
          isDate: true,
          notNull: true,
        },
      },
      updatedAt: {
        field: "updated_at",
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        validate: {
          isDate: true,
          notNull: true,
        },
      },
    },
    {
      tableName: "Comments",
    }
  );

  Comments.associate = (models) => {
    Comments.belongsTo(models.Users);
    Comments.belongsTo(models.Items);
  };

  return Comments;
};
