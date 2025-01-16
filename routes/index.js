module.exports = (app) => {
  const router = require('express').Router();

  router.use('/todo', require('./api/todoApi'));
  router.use('/tags', require('./api/tagsApi'));
  router.use('/progress', require('./api/progressApi'));
  router.use('/task', require('./api/taskApi'));


  if (process.env.NODE_ENV === 'production') {
    app.use('/', router);
  } else {
    app.use('/api', router);
  }
};
