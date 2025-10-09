'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Users_Conversations',{
      fields : ['id_users'],
      type : 'foreign key',
      name : 'Users_Conversations_id_users_fkey',
      references : {
        table : 'Users',
        field : 'id_user'
      },
      reference:{
        onDelete : 'CASCADE',
        onUpdate : 'CASCADE'
      }

    });
  },
};
