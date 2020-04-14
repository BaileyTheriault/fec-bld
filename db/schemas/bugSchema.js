const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const { Schema } = mongoose;
const bugSchema = new Schema({
  title: String,
  author: {
    name: { type: String },
    profilePicture: { type: String },
  },
  description: String,
  assignedTo: String,
  createdAt: Date,
  completedAt: Date,
  tags: [String],
});

bugSchema.plugin(AutoIncrement, { inc_field: 'id' });
module.exports = mongoose.model('bug', bugSchema, 'tickets');
