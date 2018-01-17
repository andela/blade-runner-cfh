
const mongoose = require('mongoose');

const { Schema } = mongoose;

const Game = new Schema({
  gameId: String,
  owner: String,
  players: [],
  winner: {},
  rounds: Number,
  completed: Boolean
}, { timestamps: true });

mongoose.model('Game', Game);
