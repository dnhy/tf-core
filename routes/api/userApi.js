var express = require('express');
var router = express.Router();

// 导入对应的模型文件
const userModel = require('../../module/user.js');

//           /userlist 接口路径
router.get('/userlist', (req, res) => {
  // 操作数据库 这是一个查询操作
  userModel
    .find()
    .then((data) => {
      res.json({
        code: '200', // 响应成功的编码
        msg: 'success request', // 响应成功的信息
        data, // 响应成功的数据
      });
    })
    .catch(() => {
      res.json({
        code: '400', // 响应失败的编码
        msg: 'error request', // 响应失败的信息
        data: null, // 响应失败的数据
      });
    });
});

module.exports = router;
