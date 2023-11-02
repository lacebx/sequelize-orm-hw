'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      // Define associations here
      Post.belongsTo(models.User, { foreignKey: 'userId' });
      Post.hasMany(models.Comment, { foreignKey: 'postId' });
      Post.belongsToMany(models.Tag, { through: 'PostTags', foreignKey: 'postId' });
    }
  }

  Post.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Post',
  });

  return Post;
};
