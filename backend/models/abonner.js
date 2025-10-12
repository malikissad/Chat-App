'use strict';

module.exports = (sequelize, DataTypes) => {
  const Abonner = sequelize.define('Abonner', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },

    id_user_abonne: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id_user'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },

    id_user_suivie: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id_user'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  }, {
    tableName: 'abonners',
    timestamps: false
  });

  Abonner.associate = (models) => {
    // l'utilisateur qui s'abonne
    Abonner.belongsTo(models.Users, {
      foreignKey: 'id_user_abonne',
      as: 'abonne'
    });

    // l'utilisateur qui est suivi
    Abonner.belongsTo(models.Users, {
      foreignKey: 'id_user_suivie',
      as: 'suivie'
    });
  };

  return Abonner;
};
