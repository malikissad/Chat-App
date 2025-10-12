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
      }
    }
  }, {
    tableName: 'Profiles', // même nom que dans ta migration
    timestamps: false      // pas de createdAt / updatedAt
  });

  // 🔗 Association (relations)
  Profile.associate = (models) => {
    Profile.belongsTo(models.Users, {
      foreignKey: 'id_user',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };

  return Profile;
};
