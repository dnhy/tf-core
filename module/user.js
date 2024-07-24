// 1. 导入mongoose
const mongoose = require('mongoose');

// 2.创建模型结构对象
const userSchema = new mongoose.Schema({
  name: String, // 对应数据库集合中的变量
  age: Number, // 对应数据库集合中的变量
  sex: String, // 对应数据库集合中的变量
});
// 3.创建模型对象                  users: 对应数据库中的集合名
const userModel = mongoose.model('users', userSchema);

// 4.导出模型
module.exports = userModel;
