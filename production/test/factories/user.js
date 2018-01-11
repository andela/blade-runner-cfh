'use strict';

require('../../server');
var faker = require('faker');

var createUser = function createUser() {
  return {
    name: faker.name.findName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    provider: 'local',
    password: faker.internet.password()
  };
};

module.exports = {
  createUser: createUser
};