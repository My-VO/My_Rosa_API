module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define(
    "Status",
    {
      statusId: {
        field: "status_id",
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.TEXT,
      },
      createdAt: {
        field: "created_at",
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
      tableName: "Status",
    }
  );

  Status.associate = (models) => {
    Status.hasMany(models.OrdersStatus, {
      onDelete: "CASCADE",
      foreignKey: {
        name: "statusId",
        allowNull: false,
      },
    });
  };

  return Status;
};
