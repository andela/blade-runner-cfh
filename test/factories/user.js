require('../../server');
const faker = require('faker');

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
