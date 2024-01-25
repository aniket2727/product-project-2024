





// register.controller.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../database/userschema');

router.post('/register', async (req, res) => {
  try {
    const { email, name, pass} = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email is already registered' });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(pass, 10);

    // Create a new user instance
    const newUser = new User({
      email,
      name,
      pass: hashedPassword, // Ensure the field name is 'password'
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
