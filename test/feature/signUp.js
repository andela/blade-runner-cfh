const chai = require('chai'),
  mongoose = require('mongoose'),
  chaiHttp = require('chai-http'),
  server = require('../../server'),
  mockData = require('../mockData.json'),
  User = mongoose.model('User');

const { expect } = chai;

const {
  validUser,
  missingName,
  missingEmail,
  missingPassword,
  missingAvatar,
  missingUsername,
  invalidName,
  invalidEmail,
  invalidUsername,
  invalidPassword,
  existingUsername,
} = mockData.Users;

chai.use(chaiHttp);

describe('Testing user endpoint', () => {
  beforeEach((done) => {
    User.remove({}, done);
  });
  it('should not sign up a user without a name', (done) => {
    chai.request(server)
      .post('/api/users')
      .send(missingName)
      .end((err, res) => {
        const { errors } = res.body;
        if (errors.length >= 1) {
          expect(errors[0].message).equal('name field cannot be empty');
          expect(errors[0].field).equal('name');
          expect(res).to.have.status(400);
        }
        done();
      });
  });
  it('should not sign up a user with a name less than three character', (done) => {
    chai.request(server)
      .post('/api/users')
      .send(invalidName)
      .end((err, res) => {
        const { errors } = res.body;
        if (errors.length >= 1) {
          expect(errors[0].message).equal('Name should be atleast three characters');
          expect(errors[0].field).equal('name');
          expect(res).to.have.status(400);
        }
        done();
      });
  });
  it('should not sign up a user without an email', (done) => {
    chai.request(server)
      .post('/api/users')
      .send(missingEmail)
      .end((err, res) => {
        const { errors } = res.body;
        if (errors.length >= 1) {
          expect(errors[0].message).equal('Email field cannot be empty');
          expect(errors[0].field).equal('email');
          expect(res).to.have.status(400);
        }
        done();
      });
  });
  it('should not sign up a user with an invalid email', (done) => {
    chai.request(server)
      .post('/api/users')
      .send(invalidEmail)
      .end((err, res) => {
        const { errors } = res.body;
        if (errors.length >= 1) {
          expect(errors[0].message).equal('Please input a valid Email address');
          expect(errors[0].field).equal('email');
          expect(res).to.have.status(400);
        }
        done();
      });
  });
  it('should not sign up a user without a username', (done) => {
    chai.request(server)
      .post('/api/users')
      .send(missingUsername)
      .end((err, res) => {
        const { errors } = res.body;
        if (errors.length >= 1) {
          expect(errors[0].message).equal('Username field cannot be empty');
          expect(errors[0].field).equal('username');
          expect(res).to.have.status(400);
        }
        done();
      });
  });
  it('should not sign up a user with a username of less than six characters', (done) => {
    chai.request(server)
      .post('/api/users')
      .send(invalidUsername)
      .end((err, res) => {
        const { errors } = res.body;
        if (errors.length >= 1) {
          expect(errors[0].message).equal('Please input a valid user with atleast 6 characters');
          expect(errors[0].field).equal('username');
          expect(res).to.have.status(400);
        }
        done();
      });
  });
  it('should not sign up a user without a password', (done) => {
    chai.request(server)
      .post('/api/users')
      .send(missingPassword)
      .end((err, res) => {
        const { errors } = res.body;
        if (errors.length >= 1) {
          expect(errors[0].message).equal('Password field cannot be empty');
          expect(errors[0].field).equal('password');
          expect(res).to.have.status(400);
        }
        done();
      });
  });
  it('should not sign up a user with a password less than eight characters', (done) => {
    chai.request(server)
      .post('/api/users')
      .send(invalidPassword)
      .end((err, res) => {
        const { errors } = res.body;
        if (errors.length >= 1) {
          expect(errors[0].message).equal('Please input a valid password with atleast 8 characters');
          expect(errors[0].field).equal('password');
          expect(res).to.have.status(400);
        }
        done();
      });
  });
  it('should not sign up a user without an avatar', (done) => {
    chai.request(server)
      .post('/api/users')
      .send(missingAvatar)
      .end((err, res) => {
        const { errors } = res.body;
        if (errors.length >= 1) {
          expect(errors[0].message).equal('Avatar must be selected.');
          expect(errors[0].field).equal('avatar');
          expect(res).to.have.status(400);
        }
        done();
      });
  });
  it('should sign up a  new user without giving errors', (done) => {
    chai.request(server)
      .post('/api/users')
      .send(validUser)
      .end((err, res) => {
        expect(res.body.message).equal('User created');
        expect(res).to.have.status(201);
        done();
      });
  });
  it('should not signup a new user with existing email', (done) => {
    User.create(validUser, () => {
      chai.request(server)
        .post('/api/users')
        .send(validUser)
        .end((err, res) => {
          const { errors } = res.body;
          if (errors.length >= 1) {
            expect(errors[0].message).equal('Email has already be chosen');
            expect(errors[0].field).equal('email');
            expect(res).to.have.status(409);
          }
          done();
        });
    });
  });
  it('should not signup a new user with existing username', (done) => {
    User.create(validUser, () => {
      chai.request(server)
        .post('/api/users')
        .send(existingUsername)
        .end((err, res) => {
          const { errors } = res.body;
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
