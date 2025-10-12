'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addConstraint('abonners',{
   fields:['id_user_abonne' , 'id_user_suivie'] ,
   name:'unique-id_user_abonne-and-id_user_abonne',
   type : 'unique' 
  });
  },
};
