




const router = require('express').Router();
const loginController = require('../controller/login.controller');

// Define routes
router.use('/user', loginController);

module.exports = router;
