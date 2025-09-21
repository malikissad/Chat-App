module.exports = (sequelize, DataTypes) => {
  const Conversation = sequelize.define('Conversations',{
    id_conv: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
  },{
    tableName: 'Conversations',
    timestamps: false
  }


)
  return Conversation;
};