'use strict';

var chai = require('chai'),
    mongoose = require('mongoose'),
    chaiHttp = require('chai-http'),
    server = require('../../server'),
    mockData = require('../mockData.json'),
    User = mongoose.model('User');

var expect = chai.expect;
var _mockData$Users = mockData.Users,
    validUser = _mockData$Users.validUser,
    missingName = _mockData$Users.missingName,
    missingEmail = _mockData$Users.missingEmail,
    missingPassword = _mockData$Users.missingPassword,
    missingUsername = _mockData$Users.missingUsername,
    invalidName = _mockData$Users.invalidName,
    invalidEmail = _mockData$Users.invalidEmail,
    invalidUsername = _mockData$Users.invalidUsername,
    invalidPassword = _mockData$Users.invalidPassword,
    existingUsername = _mockData$Users.existingUsername;


chai.use(chaiHttp);

describe('Testing user endpoint', function () {
  beforeEach(function (done) {
    User.remove({}, done);
  });
  it('should not sign up a user without a name', function (done) {
    chai.request(server).post('/api/users').send(missingName).end(function (err, res) {
      var errors = res.body.errors;

      if (errors.length >= 1) {
        expect(errors[0].message).equal('name field cannot be empty');
        expect(errors[0].field).equal('name');
        expect(res).to.have.status(400);
      }
      done();
    });
  });
  it('should not sign up a user with a name less than three character', function (done) {
    chai.request(server).post('/api/users').send(invalidName).end(function (err, res) {
      var errors = res.body.errors;

      if (errors.length >= 1) {
        expect(errors[0].message).equal('Name should be atleast three characters');
        expect(errors[0].field).equal('name');
        expect(res).to.have.status(400);
      }
      done();
    });
  });
  it('should not sign up a user without an email', function (done) {
    chai.request(server).post('/api/users').send(missingEmail).end(function (err, res) {
      var errors = res.body.errors;

      if (errors.length >= 1) {
        expect(errors[0].message).equal('Email field cannot be empty');
        expect(errors[0].field).equal('email');
        expect(res).to.have.status(400);
      }
      done();
    });
  });
  it('should not sign up a user with an invalid email', function (done) {
    chai.request(server).post('/api/users').send(invalidEmail).end(function (err, res) {
      var errors = res.body.errors;

      if (errors.length >= 1) {
        expect(errors[0].message).equal('Please input a valid Email address');
        expect(errors[0].field).equal('email');
        expect(res).to.have.status(400);
      }
      done();
    });
  });
  it('should not sign up a user without a username', function (done) {
    chai.request(server).post('/api/users').send(missingUsername).end(function (err, res) {
      var errors = res.body.errors;

      if (errors.length >= 1) {
        expect(errors[0].message).equal('Username field cannot be empty');
        expect(errors[0].field).equal('username');
        expect(res).to.have.status(400);
      }
      done();
    });
  });
  it('should not sign up a user with a username of less than six characters', function (done) {
    chai.request(server).post('/api/users').send(invalidUsername).end(function (err, res) {
      var errors = res.body.errors;

      if (errors.length >= 1) {
        expect(errors[0].message).equal('Please input a valid user with atleast 6 characters');
        expect(errors[0].field).equal('username');
        expect(res).to.have.status(400);
      }
      done();
    });
  });
  it('should not sign up a user without a password', function (done) {
    chai.request(server).post('/api/users').send(missingPassword).end(function (err, res) {
      var errors = res.body.errors;

      if (errors.length >= 1) {
        expect(errors[0].message).equal('Password field cannot be empty');
        expect(errors[0].field).equal('password');
        expect(res).to.have.status(400);
      }
      done();
    });
  });
  it('should not sign up a user with a password less than eight characters', function (done) {
    chai.request(server).post('/api/users').send(invalidPassword).end(function (err, res) {
      var errors = res.body.errors;

      if (errors.length >= 1) {
        expect(errors[0].message).equal('Please input a valid password with atleast 8 characters');
        expect(errors[0].field).equal('password');
        expect(res).to.have.status(400);
      }
      done();
    });
  });
  it('should sign up a  new user without giving errors', function (done) {
    chai.request(server).post('/api/users').send(validUser).end(function (err, res) {
      expect(res.body.message).equal('User created');
      expect(res).to.have.status(201);
      done();
    });
  });
  it('should not signup a new user with existing email', function (done) {
    User.create(validUser, function () {
      chai.request(server).post('/api/users').send(validUser).end(function (err, res) {
        var errors = res.body.errors;

        if (errors.length >= 1) {
          expect(errors[0].message).equal('Email has already be chosen');
          expect(errors[0].field).equal('email');
          expect(res).to.have.status(409);
        }
        done();
      });
    });
  });
  it('should not signup a new user with existing username', function (done) {
    User.create(validUser, function () {
      chai.request(server).post('/api/users').send(existingUsername).end(function (err, res) {
        var errors = res.body.errors;

        if (errors.length >= 1) {
          expect(errors[0].message).equal('Username has already been chosen');
          expect(errors[0].field).equal('username');
          expect(res).to.have.status(409);
        }
        done();
      });
    });
  });
});