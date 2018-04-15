const mongoose = require('mongoose');
const UserInfo = require('./lib/models/userInfo');
const User = require('./lib/models/user');
const userData = require('./userData.json');

const uri = 'mongodb://localhost:27017/pokemon';
mongoose.connect(uri);


userData.forEach(async user => {
  try {
    const newUserInfo = new UserInfo(user);
    const infoDoc = await newUserInfo.save();

    const newUser = new User({
      name: user.name,
      id: infoDoc._id
    });
    const userDoc = await newUser.save();

    console.log(user.name, 'successfully imported!')
  } catch (err) {
    console.log(err);
  }
})
  
