




const express=require('express');
const router=express.Router();
const getuserpost=require('../controller/getpostuser.controller')
router.get('/getpost',getuserpost);
module.exports=router;
