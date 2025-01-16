const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  taskname: {
    type: String,
    required: true,
  },
  progressids: String,
});

module.exports = mongoose.model('task', schema);
