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

const deleteTag = async (tag) => {
  try {
    const regEx = new RegExp(`^${tag}$`, 'i');
    await Tag.deleteOne({ name: regEx });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  fetchAll,
  addTag,
  deleteTag,
};
