'use strict';

require('mocha');
var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require('mongoose');

var app = require('../../server');

var User = mongoose.model('User');

var _require = require('./../factories/user'),
    createUser = _require.createUser;

var user = createUser();

chai.use(chaiHttp);

describe('api endpoint to search for a user', function () {
  beforeEach(function (done) {
    User.remove({}, done);
  });
  it('should find newly created user by name', function (done) {
    User.create(user, function () {
      // make api request to search
      chai.request(app).get('/api/search/users?user=' + user.name).end(function (err, res) {
        res.should.have.status(200);
        var users = res.body.users;

        users.length.should.equal(1);
        users[0].name.should.equal(user.name);
        users[0].email.should.equal(user.email);
        done();
      });
    });
  });

  it('should find a newly created user by email', function (done) {
    User.create(user, function () {
      // make api request to search
      chai.request(app).get('/api/search/users?user=' + user.email).end(function (err, res) {
        res.should.have.status(200);
        var users = res.body.users;

        users.length.should.equal(1);
        users[0].name.should.equal(user.name);
        users[0].email.should.equal(user.email);
        done();
      });
    });
  });

  it('should return 422 if no user query is provided', function (done) {
    User.create(user, function () {
      // make api request to search
      chai.request(app).get('/api/search/users').end(function (err, res) {
        res.should.have.status(422);
        res.body.message.should.equal('No user search query provided.');
        done();
      });
    });
  });

  it('should return 404 if no user with the provided name query is found', function (done) {
    User.create(user, function () {
      // make api request to search
      chai.request(app).get('/api/search/users?user=john').end(function (err, res) {
        res.should.have.status(404);
        done();
      });
    });
  });

  it('should return 404 if no user with the provided email query is found', function (done) {
    User.create(user, function () {
      // make api request to search
      chai.request(app).get('/api/search/users?user=john@test.com').end(function (err, res) {
        res.should.have.status(404);
        res.body.message.should.equal('A user with that email was not found.');
        done();
      });
    });
  });
});