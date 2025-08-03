const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create User
router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get All Users
router.get('/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

module.exports = router;
