import mongoose from 'mongoose';

const Game = mongoose.model('Game');

/**
 * Controller function for creating new game
 * @param {*} req
 * @param {*} res
 * @returns {Object} response
 */
export function createGame(req, res) {
  Game.create({
    gameId: req.params.id,
    owner: req.decoded.id,
    players: req.body.players,
    winner: '',
    rounds: req.body.rounds,
    completed: req.body.completed
  }, (error, result) => {
    if (error) {
      res.status(400).send({ error });
      return;
    }
    res.status(201).send({ result });
  });
}

/**
 * Controller function for updating game
 * @param {*} req
 * @param {*} res
 * @returns {Object} response
 */
export function updateGame(req, res) {
  Game.findOne({ gameId: req.params.id }, (error, game) => {
    if (error) {
      res.status(400).send({ error });
      return;
    }

    game.set({
      gameId: req.params.id,
      owner: req.body.owner,
      players: req.body.players,
      winner: req.body.winner,
      rounds: req.body.rounds,
      completed: req.body.completed
    });

    game.save((err, updatedGame) => {
      if (err) {
        res.status(400).send({ err });
        return;
      }
      res.status(200).send({ updatedGame });
    });
  });
}
