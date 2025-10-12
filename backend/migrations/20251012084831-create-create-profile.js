'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Profiles', {
      id_profile: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      avatar:{
        type : Sequelize.STRING,
        allowNull : true
      },

      bio:{
        type : Sequelize.STRING,
        allowNull : true
      },
      tel : {
        type : Sequelize.STRING,
        allowNull : true,
      },

      id_user:{
        type:Sequelize.STRING,
        references:{
          model:'Users',
          key:'id_user'
        },
        onDelete : 'CASCADE',
        onUpdate : 'CASCADE'
        }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Profiles');
  }
};