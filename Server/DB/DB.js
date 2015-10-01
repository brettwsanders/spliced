var mongoose = require('mongoose');

var mongodb_uri = process.env.MONGOLAB_URI || 'mongodb://localhost/my_database';
mongoose.connect(mongodb_uri);

var Schema = mongoose.Schema;

var started = false;

var gameSchema = new Schema({
  num_players : Number,
  player_count: Number,
  submission_count: Number,
  game_code: String,
  0 : String,
  1 : String,
  2 : String,
  3 : String,
  template: Number,
  game_started: Boolean,
  drawing_finished: Boolean
});

var playerSchema = new Schema({
  first_name: String,
  last_name: String,
  game_code: String,
  image: String,
  phone: String,
  email: String,
  counted: Boolean,
  user_name: String
});

var Game = mongoose.model('Game', gameSchema);
var Player = mongoose.model('Player', playerSchema);

module.exports.game = Game;
module.exports.player = Player;
module.exports.started = started;