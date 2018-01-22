require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');

const app = require('../../server');

const User = mongoose.model('User');
const { createUser } = require('./../factories/user');

const user = createUser();

chai.use(chaiHttp);

describe('api endpoint to search for a user', () => {
  beforeEach((done) => {
    User.remove({}, done);
  });
  it('should find newly created user by name', (done) => {
    User.create(user, () => {
      // make api request to search
      chai.request(app)
        .get(`/api/search/users?user=${user.name}`)
        .end((err, res) => {
          res.should.have.status(200);
          const { users } = res.body;
          users.length.should.equal(1);
          users[0].name.should.equal(user.name);
          done();
        });
    });
  });

  it('should find a newly created user by email', (done) => {
    User.create(user, () => {
      // make api request to search
      chai.request(app)
        .get(`/api/search/users?user=${user.email}`)
        .end((err, res) => {
          res.should.have.status(200);
          const { users } = res.body;
          users.length.should.equal(1);
          users[0].name.should.equal(user.name);
          done();
        });
    });
  });

  it('should return 422 if no user query is provided', (done) => {
    User.create(user, () => {
      // make api request to search
      chai.request(app)
        .get('/api/search/users')
        .end((err, res) => {
          res.should.have.status(422);
          res.body.message.should.equal('No user search query provided.');
          done();
        });
    });
  });

  it('should return 404 if no user with the provided name query is found', (done) => {
    User.create(user, () => {
      // make api request to search
      chai.request(app)
        .get('/api/search/users?user=john')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.users.length.should.equal(0);
          done();
        });
    });
  });

  it('should return 404 if no user with the provided email query is found', (done) => {
    User.create(user, () => {
      // make api request to search
      chai.request(app)
        .get('/api/search/users?user=john@test.com')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.users.length.should.equal(0);
          done();
        });
    });
  });
});
