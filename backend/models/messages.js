module.exports = (sequelize, DataTypes) => {
  const Messages = sequelize.define(
    "Messages",
    {
      id_mess: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      time_mess: {
        type: DataTypes.TIME,
      },
      contenu: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_conv: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "Messages",
      timestamps: false,
    }
  );

  Messages.associate = (models) => {
    Messages.belongsTo(models.Conversations, {
      foreignKey: "id_conv",
    });
  };

  return Messages;
};
