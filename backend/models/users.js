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

      avatar:{
      type:DataTypes.STRING
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
  return Users;
};