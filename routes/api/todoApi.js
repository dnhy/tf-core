var express = require('express');
const mongoose = require('mongoose');
const assert = require('http-assert');
var { formatStringDate } = require('../../utils/index.js');
var router = express.Router();

const todoModel = require('../../module/todo.js');

router
  .get('/getAllTodos', async (req, res) => {
    console.log('[ 1111 ] >', 1111);
    const { id } = req.query;
    const { Types } = mongoose;
    const objectId = Types.ObjectId;

    let data;

    const validId = new objectId(id);
    const search = id ? { _id: validId } : {};
    data = await todoModel.find(search).sort({
      createtime: 1,
    });
    data = data.map((d) => ({
      ...d.toJSON(),
      createtime: formatStringDate(new Date(d.createtime)),
    }));

    if (data.length === 0) {
      var msg = id ? '没有找到这条待办呢!' : '还没有新的待办啦！';
      throw new Error(msg);
    }

    res.send({
      ok: 1,
      data,
    });
  })
  .post('/insertTodo', async (req, res) => {
    const body = req.body;
    const { todoname, tags, attachs, comments } = body;

    assert(todoname, 422, 'todoname不能为空');
    body.createtime = new Date();
    body.tags = tags?.split(',');
    body.attachs = attachs?.split(',');
    body.comments = comments?.split(',');

    const documents = await todoModel.create({
      ...body,
    });

    res.send({ ok: 1, documents });
  });

module.exports = router;
