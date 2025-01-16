const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  progressname: {
    type: String,
    required: true,
  },

});

module.exports = mongoose.model('progress', schema);

