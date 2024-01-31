
const express = require('express');
const router = express.Router();
const allUserAccounts = require('../controller/getallaccount.controller');

router.get('/getuseraccounts', allUserAccounts);
module.exports = router;
