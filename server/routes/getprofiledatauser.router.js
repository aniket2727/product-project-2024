const express = require('express');
const router = express.Router();
const getuserprofiledata = require('../controller/getuserprofile.controller');

router.get('/getuserprofile', getuserprofiledata);

module.exports = router;
