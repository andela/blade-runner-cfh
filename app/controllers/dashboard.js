import mongoose from 'mongoose';

const Game = mongoose.model('Game');

/**
 * Get all saved games
 * @param {*} req
 * @param {*} res
 * @returns {object} response
 */
export function getGames(req, res) {
  Game.find({ owner: req.decoded.id }, (error, result) => {
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

}

/**
 * Get donations
 * @param {*} req
 * @param {*} res
 * @returns {object} response
 */
export function getDonations(req, res) {

}
