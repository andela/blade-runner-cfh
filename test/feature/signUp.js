const chai = require('chai'),
  mongoose = require('mongoose'),
  chaiHttp = require('chai-http'),
  server = require('../../server'),
  User = mongoose.model('User');

const { expect } = chai;

chai.use(chaiHttp);

describe('Testing user endpoint', () => {
  beforeEach((done) => {
    User.remove({}, done);
  });
  it('It should not sign up a user without a name', (done) => {
    chai.request(server)
      .post('/api/users')
      .send({
        name: '',
        email: 'sannidevs@gmail.com',
        username: 'developer',
        password: 'developertest',
        avatar: 'fdret'
      })
      .end((err, res) => {
        const { errors } = res.body;
        if (errors.length >= 1) {
          expect(errors[0].message).equal('name field cannot be empty');
          expect(res).to.have.status(400);
        }
        done();
      });
  });
  it('It should not sign up a user with a name less than three character', (done) => {
    chai.request(server)
      .post('/api/users')
      .send({
        name: 'le',
        email: 'sannidevs@gmail.com',
        username: 'developer',
        password: 'developertest',
        avatar: 'fdret'
      })
      .end((err, res) => {
        const { errors } = res.body;
        if (errors.length >= 1) {
          expect(errors[0].message).equal('Name should be atleast three characters');
          expect(res).to.have.status(400);
        }
        done();
      });
  });
  it('It should not sign up a user without an email', (done) => {
    chai.request(server)
      .post('/api/users')
      .send({
        name: 'sannikayz',
        email: '',
        username: 'developer',
        password: 'developertest',
        avatar: 'fdret'
      })
      .end((err, res) => {
        const { errors } = res.body;
        if (errors.length >= 1) {
          expect(errors[0].message).equal('Email field cannot be empty');
          expect(res).to.have.status(400);
        }
        done();
      });
  });
  it('It should not sign up a user with an invalid email', (done) => {
    chai.request(server)
      .post('/api/users')
      .send({
        name: 'sannikayz',
        email: 'ken.com',
        username: 'developer',
        password: 'developertest',
        avatar: 'fdret'
      })
      .end((err, res) => {
        const { errors } = res.body;
        if (errors.length >= 1) {
          expect(errors[0].message).equal('Please input a valid Email address');
          expect(res).to.have.status(400);
        }
        done();
      });
  });
  it('It should not sign up a user without a username', (done) => {
    chai.request(server)
      .post('/api/users')
      .send({
        name: 'sannikayz',
        email: 'sannidevsss@gmail.com',
        username: '',
        password: 'developertest',
        avatar: 'fdret'
      })
      .end((err, res) => {
        const { errors } = res.body;
        if (errors.length >= 1) {
          expect(errors[0].message).equal('Username field cannot be empty');
          expect(res).to.have.status(400);
        }
        done();
      });
  });
  it('It should not sign up a user with a username of less than six characters', (done) => {
    chai.request(server)
      .post('/api/users')
      .send({
        name: 'sannikayz',
        email: 'sannidevsss@gmail.com',
        username: 'ken',
        password: 'developertest',
        avatar: 'fdret'
      })
      .end((err, res) => {
        const { errors } = res.body;
        if (errors.length >= 1) {
          expect(errors[0].message).equal('Please input a valid user with atleast 6 characters');
          expect(res).to.have.status(400);
        }
        done();
      });
  });
  it('It should not sign up a user without a password', (done) => {
    chai.request(server)
      .post('/api/users')
      .send({
        name: 'sannikayz',
        email: 'sannidevs@gmail.com',
        username: 'developer',
        password: '',
        avatar: 'fdret'
      })
      .end((err, res) => {
        const { errors } = res.body;
        if (errors.length >= 1) {
          expect(errors[0].message).equal('Password field cannot be empty');
          expect(res).to.have.status(400);
        }
        done();
      });
  });
  it('It should not sign up a user without a password less than eight characters', (done) => {
    chai.request(server)
      .post('/api/users')
      .send({
        name: 'sannikayz',
        email: 'sannidevs@gmail.com',
        username: 'developer',
        password: 'ken',
        avatar: 'fdret'
      })
      .end((err, res) => {
        const { errors } = res.body;
        if (errors.length >= 1) {
          expect(errors[0].message).equal('Please input a valid password with atleast 8 characters');
          expect(res).to.have.status(400);
        }
        done();
      });
  });
  it('It should not sign up a user without an avatar', (done) => {
    chai.request(server)
      .post('/api/users')
      .send({
        name: 'sannikayz',
        email: 'sannidevs@gmail.com',
        username: 'developer',
        password: 'developertest',
        avatar: ''
      })
      .end((err, res) => {
        const { errors } = res.body;
        if (errors.length >= 1) {
          expect(errors[0].message).equal('Avatar must be selected.');
          expect(res).to.have.status(400);
        }
        done();
      });
  });
  it('It should sign up a  new user without giving errors', (done) => {
    chai.request(server)
      .post('/api/users')
      .send({
        name: 'sannikayz',
        email: 'sanjuyuhhbnetguj@gmail.com',
        username: 'devlohhkjhurp streahk',
        password: 'developertest',
        avatar: 'fdret'
      })
      .end((err, res) => {
        expect(res.body.message).equal('User created');
        expect(res).to.have.status(201);
        done();
      });
  });
  it('It should not signup a new user with existing email', (done) => {
    User.create({
      name: 'sannikayz',
      email: 'sannidevs@gmail.com',
      username: 'developer',
      password: 'developertest',
      avatar: 'fdret'
    }, () => {
      chai.request(server)
        .post('/api/users')
        .send({
          name: 'sannikayz',
          email: 'sannidevs@gmail.com',
          username: 'developer',
          password: 'developertest',
          avatar: 'fdret'
        })
        .end((err, res) => {
          const { errors } = res.body;
          if (errors.length >= 1) {
            expect(errors[0].message).equal('Email has already be chosen');
            expect(res).to.have.status(400);
          }
          done();
        });
    });
  });
  it('It should not signup a new user with existing username', (done) => {
    User.create({
      name: 'sannikayz',
      email: 'sannidev@gmail.com',
      username: 'developer',
      password: 'developertest',
      avatar: 'fdret'
    }, () => {
      chai.request(server)
        .post('/api/users')
        .send({
          name: 'sannikayz',
          email: 'sannidevs@gmail.com',
          username: 'developer',
          password: 'developertest',
          avatar: 'fdret'
        })
        .end((err, res) => {
          const { errors } = res.body;
          if (errors.length >= 1) {
            expect(errors[0].message).equal('Username has already been chosen');
            expect(res).to.have.status(400);
          }
          done();
        });
    });
  });
});
