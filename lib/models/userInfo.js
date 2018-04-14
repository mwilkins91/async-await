const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userInfoSchema = new Schema({
  name: { type: String, required: true },
  favoritePokemon: { type: String, required: true },
  pokemonEndpoint: { type: String, required: true },
});

const UserInfo = mongoose.model('UserInfo', userInfoSchema);

module.exports = UserInfo;
