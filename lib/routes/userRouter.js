const express = require('express');
const router = express.Router();
const User = require('../models/user');
const UserInfo = require('../models/userInfo');

router.get('/', async (req, res) => {
  try {
    res.status(200).json(await User.find());
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).send(await UserInfo.findById(id));
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newUserInfo = new UserInfo(req.body);
    const infoDoc = await newUserInfo.save();

    const newUser = new User({ name: req.body.name, id: infoDoc._id });
    const userDoc = await newUser.save();

    res.status(200).json('success');
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
