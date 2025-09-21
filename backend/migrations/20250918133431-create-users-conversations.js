'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users_Conversations', {
      id_users: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Users',
          key: 'id_user'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      },

      id_conv:{
        type:Sequelize.INTEGER,
        references:{
          model:'Conversations',
          key:'id_conv'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users_Conversations');
  }
};