





// login.router.js
const express = require('express');
const router = express.Router();
const loginController = require('../controller/login.controller');

router.post('/login', loginController);

module.exports = router;

