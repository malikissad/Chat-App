'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('abonners', {
      id:{
        type : Sequelize.INTEGER,
        allowNull : false,
        unique:true,
        autoIncrement:true,
        primaryKey : true
      },

      id_user_abonne:{
        type : Sequelize.STRING,
        references:{
          model:'Users',
          key : 'id_user'
        },
        onDelete : 'CASCADE',
        onUpdate : 'CASCADE'
      },

      id_user_suivie:{
        type : Sequelize.STRING,
        references:{
          model:'Users',
          key : 'id_user'
        },
        onDelete : 'CASCADE',
        onUpdate : 'CASCADE'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('abonners');
  }
};