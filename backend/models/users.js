'use strict';

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id_user: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false
    },

    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'Users',
    timestamps: false
  });

  Users.associate = (models) => {
    // 🧍‍♂️ Relation One-to-One avec Profile
    Users.hasOne(models.Profile, {
      foreignKey: 'id_user',
      as: 'profile',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    // 🔁 Relation Many-to-Many auto-référencée via Abonner
    Users.belongsToMany(models.Users, {
      through: models.Abonner,
      as: 'abonnements', // les utilisateurs que je suis
      foreignKey: 'id_user_abonne',
      otherKey: 'id_user_suivie',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    Users.belongsToMany(models.Users, {
      through: models.Abonner,
      as: 'abonnes', // les utilisateurs qui me suivent
      foreignKey: 'id_user_suivie',
      otherKey: 'id_user_abonne',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };

  return Users;
};
