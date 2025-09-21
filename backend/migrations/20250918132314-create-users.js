'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id_user: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      username: {
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
      },
      
      email:{
        type:Sequelize.STRING,
        allowNull:false,
      },

      avatar:{
      type:Sequelize.STRING
      },

      password:{
        type: Sequelize.STRING,
        allowNull: false,
      },

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};