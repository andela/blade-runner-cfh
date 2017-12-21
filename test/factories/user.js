const mongoose = require('mongoose');
const faker = require('faker');
const app = require('../../server');
const User = mongoose.model('User');

const createUser = () => ({
  name: faker.name.findName(),
  username: faker.internet.userName(),
  email: faker.internet.email(),
  provider: 'local',
  password: faker.internet.password()
});

module.exports = {
  createUser
};
