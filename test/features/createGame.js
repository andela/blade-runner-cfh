require('babel-polyfill');
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

chai.use(chaiHttp);

let token;

describe('api endpoint for create game in db', () => {
  before(async () => {
    const user = new User(fakeUser);
    const returnedUser = await user.save();
    token = jwt.sign({ id: returnedUser._id }, secret, {
      expiresIn: '3h',
    });
  });

  it('should create game data in db', (done) => {
    chai.request(app)
      .post('/api/games/1/start')
      .set({ 'x-access-token': token })
      .send({
        owner: 1,
        players: [{}, {}],
        winner: '',
        completed: false
      })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.result.owner.should.equal('1');
        done();
      });
  });

  it('should update game data in db', (done) => {
    chai.request(app)
      .put('/api/games/1/start')
      .set({ 'x-access-token': token })
      .send({
        owner: 1,
        players: [{}, {}],
        winner: 'charles',
        completed: false
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.updatedGame.winner.should.equal('charles');
        done();
      });
  });
});
