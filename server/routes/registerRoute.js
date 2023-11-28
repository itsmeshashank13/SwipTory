const express = require('express');
const User = require('./models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Validate user input
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  // Check if username is unique
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  // Create a new user
  const user = new User({ username, password });
  await user.save();

  // Generate and send authentication token
  const token = await user.generateAuthToken();
  res.status(201).json({ token });
});