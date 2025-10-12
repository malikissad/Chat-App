'use strict';
module.exports = (sequelize, DataTypes) => {
  const abonner = sequelize.define('abonner', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    id_user_abonne: {
      type: DataTypes.STRING,
      references: {
        model: 'Users',
        key: 'id_user'
      }
    },
    id_user_suivie: {
      type: DataTypes.STRING,
      references: {
        model: 'Users',
        key: 'id_user'
      }
    }
  }, {
    tableName: 'abonners',
    timestamps: false
  });
  return abonner;
};
