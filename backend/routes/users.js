const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create User
// router.post('/register', async (req, res) => {
//   try {
//     const user = new User(req.body);
//     await user.save();
//     res.status(201).send(user);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

router.post('/register', async (req, res) => {
  const { email, mobile } = req.body;

  try {
    // Check if user exists by email or mobile
    const existingUser = await User.findOne({
      $or: [{ email }, { mobile }]
    });

    if (existingUser) {
      return res.status(409).json({ message: 'User with this email or mobile already exists' });
    }

    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});

// Get All Users
router.get('/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

module.exports = router;
