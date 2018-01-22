require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');

const app = require('../../server');

const User = mongoose.model('User');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const { createUser } = require('./../factories/user');

const fakeUser = createUser();

const { expect } = chai;
chai.use(chaiHttp);

let token;

describe('api endpoints for dashboard routes', () => {
  before(async () => {
    const user = new User(fakeUser);
    const returnedUser = await user.save();
    // eslint-disable-next-line
        token = jwt.sign({ id: returnedUser._id }, secret, {
      expiresIn: '3h',
    });
  });

  it('should return array of games', (done) => {
    chai.request(app)
      .get('/api/games/history')
      .set({ 'x-access-token': token })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.result).to.be.an('array');
        done();
      });
  });

  it('should return array of objects', (done) => {
    chai.request(app)
      .get('/api/leaderboard')
      .set({ 'x-access-token': token })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.result).to.be.an('array');
        done();
      });
  });

  it('should return array of donations made by user', (done) => {
    chai.request(app)
      .get('/api/donations')
      .set({ 'x-access-token': token })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.donations).to.be.an('array');
        done();
      });
  });
});
