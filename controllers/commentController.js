const { Comment } = require('../models');

module.exports = {
  createComment: async (commentData) => {
    return Comment.create(commentData);
  },

  getCommentById: async (commentId) => {
    return Comment.findByPk(commentId);
  },

  updateComment: async (commentId, updatedData) => {
    return Comment.update(updatedData, { where: { id: commentId } });
  },

  deleteComment: async (commentId) => {
    return Comment.destroy({ where: { id: commentId } });
  },
};
