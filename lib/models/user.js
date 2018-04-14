const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  id: { type: Schema.Types.ObjectId, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
