'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Users','id_user',{
      type : Sequelize.STRING,
      allowNull : false,
      unique : true
    });
  },
};
