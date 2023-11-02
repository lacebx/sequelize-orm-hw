'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate(models) {
      // Define associations here
      Tag.belongsToMany(models.Post, { through: 'PostTags', foreignKey: 'tagId' });
      Tag.belongsToMany(models.User, { through: 'UserTags', foreignKey: 'tagId' });
    }
  }

  Tag.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tag',
  });

  return Tag;
};
