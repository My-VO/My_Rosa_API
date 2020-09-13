module.exports = (sequelize, DataTypes) => {
  const ContactInfo = sequelize.define(
    "ContactInfo",
    {
      id: {
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
      deliveryAddress: {
        field: "delivery_address",
        allowNull: false,
        type: DataTypes.TEXT,
      },
      billAddress: {
        field: "bill_address",
        allowNull: false,
        type: DataTypes.TEXT,
      },
      phoneNumber: {
        field: "phone_number",
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      createdAt: {
        field: "created_at",
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
      tableName: "Contact_Info",
    }
  );

  ContactInfo.associate = (models) => {
    ContactInfo.belongsTo(models.Users, {
      onDelete: "CASCADE",
      foreignKey: {
        name: "userId",
        allowNull: false,
      },
    });
  };

  return ContactInfo;
};
