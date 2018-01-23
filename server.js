require('dotenv').config();
/**
 * Module dependencies.
 */
const express = require('express'),
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
const config = require('./config/config'),
  auth = require('./config/middlewares/authorization'),
  mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//  Bootstrap db connection
mongoose.connect(config.db, {
  useMongoClient: true
});

// Bootstrap models
const modelsPath = `${__dirname}/app/models`;
const walk = (path) => {
  fs.readdirSync(path).forEach((file) => {
    const newPath = `${path}/${file}`;
    const stat = fs.statSync(newPath);
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

const app = express();

app.use((req, res, next) => {
  next();
});

app.use(validator());

// express settings
require('./config/express')(app, passport, mongoose);

// Bootstrap routes
require('./config/routes')(app, passport, auth);

// Start the app by listening on <port>
const { port } = config;
const server = app.listen(port);
const ioObj = io.listen(server, { log: false });
// game logic handled here
require('./config/socket/socket')(ioObj);

// Initializing logger
logger.init(app, passport, mongoose);

// expose app
// eslint-disable-next-line no-multi-assign
exports = module.exports = app;
