// Import necessary modules or define your logic here
const express = require('express');
const router = express.Router();

// Define login route
router.post('/login', async (req, res) => {
  try {
   res.send('apis is created')
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// You may define other routes here if needed

module.exports = router;
