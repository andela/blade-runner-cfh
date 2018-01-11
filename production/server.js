'use strict';

require('dotenv').config();
/**
 * Module dependencies.
 */
var express = require('express'),
    fs = require('fs'),
    passport = require('passport'),
    logger = require('mean-logger'),
    validator = require('express-validator'),
    io = require('socket.io');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Load configurations
// if test env, load example file
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require('./config/config'),
    auth = require('./config/middlewares/authorization'),
    mongoose = require('mongoose');

//  Bootstrap db connection
mongoose.connect(config.db, {
  useMongoClient: true
});

// Bootstrap models
var modelsPath = __dirname + '/app/models';
var walk = function walk(path) {
  fs.readdirSync(path).forEach(function (file) {
    var newPath = path + '/' + file;
    var stat = fs.statSync(newPath);
    if (stat.isFile()) {
      if (/(.*)\.(js|coffee)/.test(file)) {
        // eslint-disable-next-line import/no-dynamic-require, global-require
        require(newPath);
      }
    } else if (stat.isDirectory()) {
      walk(newPath);
    }
  });
};
walk(modelsPath);

//  bootstrap passport config file
require('./config/passport')(passport);

var app = express();

app.use(function (req, res, next) {
  next();
});

app.use(validator());

// express settings
require('./config/express')(app, passport, mongoose);

// Bootstrap routes
require('./config/routes')(app, passport, auth);

// Start the app by listening on <port>
var port = config.port;

var server = app.listen(port);
var ioObj = io.listen(server, { log: false });
// game logic handled here
require('./config/socket/socket')(ioObj);

// Initializing logger
logger.init(app, passport, mongoose);

// expose app
// eslint-disable-next-line no-multi-assign
exports = module.exports = app;