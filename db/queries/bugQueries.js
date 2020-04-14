const Bug = require('../schemas/bugSchema');

const insertBug = async (obj) => {
  const newTicket = new Bug(obj);

  try {
    await newTicket.save();
  } catch (err) {
    console.error(err);
  }
};

const updateBug = async (obj) => {
  try {
    await Bug.findOneAndUpdate({ id: obj.id }, obj);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  insertBug,
  updateBug,
};
