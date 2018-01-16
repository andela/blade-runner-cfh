
const mongoose = require('mongoose');

const { Schema } = mongoose;

const Game = new Schema({
  gameId: Number,
  owner: String,
  players: [],
  winner: String,
  rounds: Number,
  completed: Boolean
}, { timestamps: true });

mongoose.model('Game', Game);
