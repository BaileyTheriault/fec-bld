const mongoose = require('mongoose');

const { Schema } = mongoose;
const forumSchema = new Schema({
  bug: Number,
  title: String,
  author: {
    name: { type: String },
    profilePicture: { type: String },
  },
  description: String,
  posts: [{
    author: {
      name: { type: String },
      profilePicture: { type: String },
    },
    text: String,
    images: [String],
  }],
});

module.exports = mongoose.model('forum', forumSchema, 'forum');
