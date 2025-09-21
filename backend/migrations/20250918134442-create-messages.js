'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Messages', {
      id_mess: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      time_mess: {
        type: Sequelize.TIME
      },
      contenu:{
        type:Sequelize.STRING,
        allowNull:false
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
    await queryInterface.dropTable('Messages');
  }
};