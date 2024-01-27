



// userabout.router.mjs
const express=require('express')
const router = express.Router();
const adduserprofile=require('../controller/userabout.controller')

router.post('/addprofiledata',adduserprofile);

module.exports = router;
