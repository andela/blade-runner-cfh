
const mongoose = require('mongoose');

const { Schema } = mongoose;

const Game = new Schema({
  gameId: String,
  ownerId: String,
  ownerUsername: String,
  players: [],
  winner: {},
  rounds: Number,
  completed: Boolean
}, { timestamps: true });

mongoose.model('Game', Game);
