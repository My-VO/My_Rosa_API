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
      },
      userId: {
        field: "user_id",
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      itemType: {
        field: "item_type",
        allowNull: false,
        type: DataTypes.TEXT,
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
        },
      },
      updatedAt: {
        field: "updated_at",
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        validate: {
          isDate: true,
        },
      },
    },
    {
      tableName: "Comments",
    }
  );

  Comments.associate = (models) => {
    Comments.belongsTo(models.Users, {
      onDelete: "CASCADE",
      foreignKey: {
        name: "userId",
        allowNull: false,
      },
    });
    Comments.belongsTo(models.Items, {
      onDelete: "CASCADE",
      foreignKey: {
        name: "itemId",
        allowNull: false,
      },
    });
  };

  return Comments;
};
