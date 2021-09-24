var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const API_VER = "v1";

//swagger
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

//routes
var indexRouter = require('./routes/index');
var quotesRouter = require('./routes/quotes');
var tableRouter = require('./routes/tables');
// var quotesRouter = require('./db/resettables');
// var quotesRouter = require('./db/createdata');
// var quotesRouter = require('./db/resetdata');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/'+ API_VER + '/', indexRouter);
app.use('/api/'+ API_VER + '/quotes', quotesRouter);
app.use('/api/'+ API_VER + '/db', tableRouter);

app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerFile))

module.exports = app;
