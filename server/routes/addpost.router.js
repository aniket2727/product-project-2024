const express = require('express');
const router = express.Router();
const addPostController = require('../controller/addpost.controller');

router.post('/addpost', addPostController);

module.exports = router;
