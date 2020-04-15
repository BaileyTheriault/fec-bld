const mongoose = require('mongoose');
const bugQueries = require('./queries/bugQueries');
const forumQueries = require('./queries/forumQueries');

mongoose.connect('mongodb://localhost/fec', { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = {
  bugQueries,
  forumQueries,
};
