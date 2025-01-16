var express = require('express');
const assert = require('http-assert');
var router = express.Router();
var useTransformId = require('../../hooks/useTransformId.js');
const tagsModel = require('../../module/tags.js');

router
  .get('/', async (req, res) => {
    const data = await tagsModel.find();

    var msg = data.length ? '查询成功' : '还没有标签哦！';

    res.send({
      ok: 1,
      msg,
      data,
    });
  })
  .get('/getTag', async (req, res) => {
    const { id, name } = req.query;
    const validId = useTransformId(id);
    const data = await tagsModel.findOne({
      $or: [
        {
          _id: validId,
        },
        { name },
      ],
    });

    var msg = '';

    if (data) {
      msg = '查询成功';
    } else {
      msg = '未找到该记录';
    }

    res.send({
      ok: 1,
      msg,
      data,
    });
  })
  .post('/addTags', async (req, res) => {
    const body = req.body;
    const documents = await tagsModel.create({
      ...body,
    });

    res.send({ ok: 1, documents });
  })
  .put('/:id', async (req, res) => {
    const id = req.params.id;
    assert(id, 422, '标识符为空');
    const { type, name } = req.body;
    const valiedateType =
      ['success', 'processing', 'error', 'default', 'warning'].includes(type) ||
      undefined;

    assert(valiedateType, 422, '不正确的类型');
    assert(name, 422, '不正确的名称');
    const query = await tagsModel.updateOne(
      { _id: id },
      {
        type,
        name,
      },
    );

    res.send({ ok: 1, query });
  })
  .delete('/:id', async (req, res) => {
    const { id } = req.params;
    assert(id, 422, '标识符为空');
    const document = await tagsModel.deleteOne({ _id: id });
    res.send(document);
  });
module.exports = router;
