const { User } = require('../models');

module.exports = {
  createUser: async (userData) => {
    return User.create(userData);
  },

  getUserById: async (userId) => {
    return User.findByPk(userId);
  },

  updateUser: async (userId, updatedData) => {
    return User.update(updatedData, { where: { id: userId } });
  },

  deleteUser: async (userId) => {
    return User.destroy({ where: { id: userId } });
  },
};
