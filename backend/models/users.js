module.exports = (sequelize, DataTypes) => {
const Users = sequelize.define('Users',{
  id_user: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },

      username: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true
      },
      
      email:{
        type:DataTypes.STRING,
        allowNull:false,
      },

      Name:{
        type:DataTypes.STRING,
        allowNull:false,
      },

      password:{
        type: DataTypes.STRING,
        allowNull: false,
      },
},
{
   tableName:'Users',
   timestamps: false
})



Users.associate = (models) => {
  Users.belongsToMany(models.Conversations, {
      through: 'Users_Conversations', // nom de la table intermédiaire
      foreignKey: 'id_users',        // clé étrangère côté User
      otherKey: 'id_conv',          // clé étrangère côté Conversation
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
  })
}
  return Users;
};