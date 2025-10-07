'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users_Conversations extends Model {}

  Users_Conversations.init({
    id_users: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_conv: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Users_Conversations',
    tableName: 'Users_Conversations',
    timestamps: false
  });

  return Users_Conversations;
};
