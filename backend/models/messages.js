module.exports = (sequelize, DataTypes) => {
const Messages = sequelize.define('Messages',{
  id_mess: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      time_mess: {
        type: DataTypes.TIME
      },
      contenu:{
        type:DataTypes.STRING,
        allowNull:false
      },
      id_conv:{
        type:DataTypes.INTEGER,
      }

},
{
  tableName:'Messages',
  timestamps: false
});
  return Messages;
};