const Tag = require('../schemas/tagSchema');

const fetchAll = async () => {
  try {
    return await Tag.find();
  } catch (err) {
    return console.error(err);
  }
};

const addTag = async (tag) => {
  try {
    const createdTag = new Tag(tag);
    await createdTag.save();
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  fetchAll,
  addTag,
};
