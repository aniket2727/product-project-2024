const express = require('express');
const router = express.Router();
const getAllAccounts=require('../controller/getallaccount.controller')
const jwtMiddleware = require('../middleware/webtokenmiddleware'); 
// Route that requires token verification
router.get('/getuseraccounts', jwtMiddleware, getAllAccounts);

module.exports = router;
