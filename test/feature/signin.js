import chai from 'chai';
import chaiHttp from 'chai-http';
import mongoose from 'mongoose';
import mockData from '../mockData';
import server from '../../server';

const User = mongoose.model('User');

const { expect } = chai;

const {
  validUser,
  missingSigninEmail,
  missingSigninPassword,
  invalidSignin,
  invalidSigninPassword,
  validSignin
} = mockData.Users;

chai.use(chaiHttp);

describe('Testing user signin API', () => {
  beforeEach((done) => {
    User.remove({}, done);
  });
  it('should not sign in without email', () => {
    User.create(validUser, () => {
      chai.request(server)
        .post('/api/users/signin')
        .send(missingSigninEmail)
        .end((err, res) => {
          expect(res.body.message).equal('Email field cannot be empty');
        });
    });
  });
  it('should not sign in without password', () => {
    chai.request(server)
      .post('/api/users/signin')
      .send(missingSigninPassword)
      .end((err, res) => {
        expect(res.body.message).equal('Password field cannot be empty');
      });
  });
  it('should not sign in with incorrect email', () => {
    chai.request(server)
      .post('/api/users/signin')
      .send(invalidSignin)
      .end((err, res) => {
        expect(res.body.message).equal('Incorrect Login details');
      });
  });
  it('should not sign in with incorrect password', () => {
    chai.request(server)
      .post('/api/users/signin')
      .send(invalidSigninPassword)
      .end((err, res) => {
        expect(res.body.message).equal('Incorrect Login details');
      });
  });
  it('should sign in a valid user', () => {
    User.create(validUser, () => {
      chai.request(server)
        .post('/api/users/signin')
        .send(validSignin)
        .end((err, res) => {
          expect(res.body.message).equal('User created');
        });
    });
  });
});
