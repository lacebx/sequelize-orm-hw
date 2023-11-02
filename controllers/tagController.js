const { Tag } = require('../models');

module.exports = {
  createTag: async (tagData) => {
    return Tag.create(tagData);
  },

  getTagById: async (tagId) => {
    return Tag.findByPk(tagId);
  },

  updateTag: async (tagId, updatedData) => {
    return Tag.update(updatedData, { where: { id: tagId } });
  },

  deleteTag: async (tagId) => {
    return Tag.destroy({ where: { id: tagId } });
  },
};
