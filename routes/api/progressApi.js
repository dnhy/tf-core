var express = require('express');
const assert = require('http-assert');
var router = express.Router();
var useTransformId = require('../../hooks/useTransformId.js');
const progressModel = require('../../module/progress.js');

router
  .get('/', async function (req, res) {
    const data = await progressModel.find();
    var msg = data.length ? '查询成功' : '还没有过程哦！';

    res.send({
      ok: 1,
      msg,
      data,
    });
  })
  .post('/addProgress', async (req, res) => {
    const body = req.body;
    const documents = await progressModel.create({
      ...body,
    });

    res.send({ ok: 1, documents });
  });

module.exports = router;
