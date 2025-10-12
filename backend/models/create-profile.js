'use strict';

module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    id_profile: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },

    avatar: {
      type: DataTypes.STRING,
      allowNull: true
    },

    bio: {
      type: DataTypes.STRING,
      allowNull: true
    },

    tel: {
      type: DataTypes.STRING,
      allowNull: true
    },

    id_user: {
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
    tableName: 'Profiles',
    timestamps: false
  });

  Profile.associate = (models) => {
    // Chaque profil appartient à un utilisateur
    Profile.belongsTo(models.Users, {
      foreignKey: 'id_user',
      as: 'user',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };

  return Profile;
};
