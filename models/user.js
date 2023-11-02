'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Define associations here
      User.hasMany(models.Post, { foreignKey: 'userId' });
      User.belongsToMany(models.Tag, { through: 'UserTags', foreignKey: 'userId' });
    }
  }

  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};

