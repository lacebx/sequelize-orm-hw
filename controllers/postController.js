const { Post } = require('../models');

module.exports = {
  createPost: async (postData) => {
    return Post.create(postData);
  },

  getPostById: async (postId) => {
    return Post.findByPk(postId);
  },

  updatePost: async (postId, updatedData) => {
    return Post.update(updatedData, { where: { id: postId } });
  },

  deletePost: async (postId) => {
    return Post.destroy({ where: { id: postId } });
  },
};
