var express = require('express');
const assert = require('http-assert');
var router = express.Router();
var useTransformId = require('../../hooks/useTransformId.js');
const taskModel = require('../../module/task.js');

router
  .get('/', async (req, res) => {
    const data = await taskModel.find();
    console.log('data :', data);
    var msg = data.length ? '查询成功' : '还没有任务哦！';

    res.send({
      ok: 1,
      msg,
      data,
    });
  })
  .post('/addTask', async (req, res) => {
    const body = req.body;
    const documents = await taskModel.create({
      ...body,
    });

    res.send({ ok: 1, documents });
  });

module.exports = router;
