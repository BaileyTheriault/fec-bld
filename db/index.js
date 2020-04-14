const mongoose = require('mongoose');
const bugQueries = require('./queries/bugQueries');

mongoose.connect('mongodb://localhost/fec', { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

module.exports = {
  bugQueries,
};
