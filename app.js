require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const config = require('./config');
const cors = require('cors');
const chalk = require('chalk');

const port = process.env.PORT || 3000;

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:8080'
        : `${process.env.DOMAIN}`,
  }),
);

require('./plugins/db')(config);
require('./routes/index')(app);

app.listen(port);
console.log(`Sever is Starting now...
 ${chalk.blue(`
 _____   _       ___  ___   _____   _____   _      __    __
|_   _| | |     /   |/   | | ____| |  ___| | |     \\ \\  / / 
  | |   | |    / /|   /| | | |__   | |__   | |      \\ \\/ /  
  | |   | |   / / |__/ | | |  __|  |  __|  | |       \\  /   
  | |   | |  / /       | | | |___  | |     | |___    / /    
  |_|   |_| /_/        |_| |_____| |_|     |_____|  /_/    
                                        
 `)} 

completed.

server is listening on PORT ${port}.
`);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500).send({
    code: 0,
    message: err.message,
  });
});

module.exports = app;
