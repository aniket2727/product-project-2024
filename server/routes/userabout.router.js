



// userabout.router.mjs
const express=require('express')
const router = express.Router();
const userprofileinfo=require('../controller/userabout.controller')

router.use('/a', userprofileinfo);

module.exports = router;
