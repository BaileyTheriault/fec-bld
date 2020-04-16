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
  createdAt: { type: Date, default: Date.now },
  completedAt: Date,
  threat: String,
  tags: [String],
});

bugSchema.plugin(AutoIncrement, { inc_field: 'id' });
module.exports = mongoose.model('bug', bugSchema, 'tickets');
