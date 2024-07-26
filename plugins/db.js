module.exports = (config) => {
  const mongoose = require('mongoose');

  if (typeof error !== 'function') {
    error = () => {
      console.log('连接失败');
    };
  }

  mongoose.connect(config.db);

  // 设置回调
  mongoose.connection.once('open', () => {
    console.log('数据库连接成功');
  });

  mongoose.connection.on('error', () => {
    console.log('数据库连接失败');
    error();
  });

  mongoose.connection.on('close', () => {
    console.log('数据库关闭连接');
  });
};
