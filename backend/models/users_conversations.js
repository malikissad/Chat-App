'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users_Conversations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users_Conversations.init({
    username: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users_Conversations',
  });
  return Users_Conversations;
};