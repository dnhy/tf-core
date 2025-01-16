const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: {
      values: ['success', 'processing', 'error', 'default', 'warning'],
      message:
        "'name' must be one of 'success', 'processing', 'error', 'default', 'warning'",
      default: 'success',
    },
  },
});

module.exports = mongoose.model('tags', schema);
