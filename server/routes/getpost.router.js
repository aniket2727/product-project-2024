




const express=require('express');
const router=express.Router();
const getuserpost=require('../controller/getpostuser')
router.get('/getuserposts',getuserpost);
module.exports=router;
