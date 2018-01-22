import mongoose from 'mongoose';

const Game = mongoose.model('Game');
const User = mongoose.model('User');

/**
 * Get all saved games
 * @param {*} req
 * @param {*} res
 * @returns {object} response
 */
export function getGames(req, res) {
  Game.find({
    $or: [
      { ownerId: req.decoded.id },
      { players: req.decoded.id }
    ]
  }, (error, result) => {
    if (error) {
      return res.status(400).send({ error });
    }
    return res.status(200).send({ result });
  });
}

/**
 * Get leaderboard
 * @param {*} req
 * @param {*} res
 * @returns {object} response
 */
export function getLeaderboard(req, res) {
  Game.aggregate([
    { $group: { _id: '$winner.username', count: { $sum: 1 } } },
    { $sort: { count: -1 } }
  ]).then((result) => {
    res.status(200).send({ result });
  });
}

/**
 * Get donations
 * @param {*} req
 * @param {*} res
 * @returns {object} response
 */
export function getDonations(req, res) {
  User.findOne({ _id: req.decoded.id }, (error, result) => {
    if (error) {
      return res.status(400).send({ error });
    }
    if (result) {
      return res.status(200).send({ donations: result.donations });
    }
  });
}
