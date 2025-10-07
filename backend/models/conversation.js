module.exports = (sequelize, DataTypes) => {
  const Conversations = sequelize.define('Conversations', {
    id_conv: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
  }, {
    tableName: 'Conversations',
    timestamps: false,
  });

  Conversations.associate = (models) => {
    Conversations.hasMany(models.Messages, {
      foreignKey: 'id_conv',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });


    Conversations.belongsToMany(models.Users, {
      through: 'Users_Conversations', // nom de la table intermédiaire
      foreignKey: 'id_conv',        // clé étrangère côté User
      otherKey: 'id_users',          // clé étrangère côté Conversation
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    })
  };

  return Conversations;
};
