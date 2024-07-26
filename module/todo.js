const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  todoname: { type: String, required: true },
  complete: Boolean,
  describtion: String,
  taskid: String,
  progressid: String,
  percent: String,
  tags: Array,
  attachs: Array,
  comments: Array,
  createtime: Date,
});

schema.index({ createtime: -1 });

module.exports = mongoose.model('todos', schema);
