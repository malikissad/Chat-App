'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn("Users_Conversations" , "id_users", {
      type : Sequelize.STRING,
      allowNull : false,
      unique : true
    });    
  },
};
