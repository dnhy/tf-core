module.exports = (app) => {
  const router = require('express').Router();

  router.use('/todo', require('./api/todoApi'));

  if (process.env.NODE_ENV === 'production') {
    app.use('/', router);
  } else {
    app.use('/api', router);
  }

  // app.use('/api/moments', require('./moments'))
  // app.use('/api/master', require('./master'))
  // app.use('/api/upload', require('./upload'))
  // app.use('/api/options', require('./options'))
};
