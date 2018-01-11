'use strict';

var config = require('dotenv');

config.config();

var path = require('path'),
    rootPath = path.normalize(__dirname + '/../..');

module.exports = {
  root: rootPath,
  port: process.env.PORT || 3000,
  db: process.env.MONGOHQ_URL || 'mongodb://localhost:27017'
};