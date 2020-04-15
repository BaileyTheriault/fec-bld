const Bug = require('../schemas/bugSchema');

const insertBug = async (obj) => {
  const newTicket = new Bug(obj);

  try {
    const ticketId = await newTicket.save();
    return ticketId.id;
  } catch (err) {
    return console.error(err);
  }
};

const updateBug = async (obj) => {
  try {
    await Bug.findOneAndUpdate({ id: obj.id }, obj);
  } catch (err) {
    console.error(err);
  }
};

const resolveBug = async (bugId) => {
  try {
    await Bug.findOneAndUpdate({ id: bugId }, { completedAt: Date.now() });
  } catch (err) {
    console.error(err);
  }
};

const fetchAll = async () => {
  try {
    return await Bug.find();
  } catch (err) {
    return console.error(err);
  }
};

module.exports = {
  insertBug,
  updateBug,
  resolveBug,
  fetchAll,
};
