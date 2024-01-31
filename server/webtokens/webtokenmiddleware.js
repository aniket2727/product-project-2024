



const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Middleware to verify the token
const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  jwt.verify(token, 'your-secret-key', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
    req.userId = decoded.userId;
    next();
  });
};

// Route that requires token verification
router.get('/getuseraccounts', verifyToken, (req, res) => {
  // Your existing logic to fetch user accounts
});

module.exports = router;
