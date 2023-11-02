'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      // Define associations here
      Comment.belongsTo(models.Post, {
        foreignKey: 'postId',
        onDelete: 'CASCADE', // This option defines what happens when the associated Post is deleted
      });
    }
  }

  Comment.init(
    {
      text: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Comment',
    }
  );

  return Comment;
};
