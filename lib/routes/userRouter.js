const express = require('express');
const router = express.Router();
const User = require('../models/user');
const UserInfo = require('../models/userInfo');

router.get('/', (req, res) => {
  User.find()
    .then(docs => {
      res.status(200).json(docs);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  UserInfo.findById(id)
    .then(doc => {
      res.status(200).send(doc);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
});

router.post('/', (req, res) => {
  const newUserInfo = new UserInfo(req.body);
  newUserInfo
    .save()
    .then(doc => {
      const newUser = new User({ name: req.body.name, id: doc._id });
      return newUser.save(); // return another promise, so we can chain another .then
    })
    .then(doc => {
      res.status(200).json('success');
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
});

module.exports = router;
