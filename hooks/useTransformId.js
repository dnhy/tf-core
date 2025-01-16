const mongoose = require('mongoose');

module.exports = function (id) {
  const { Types } = mongoose;
  return new Types.ObjectId(id);
};
