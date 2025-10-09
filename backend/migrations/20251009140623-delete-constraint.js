'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.removeConstraint('Users_Conversations', 'Users_Conversations_id_users_fkey');
  },
};
