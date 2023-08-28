var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const USER =require('../model/user')
var alldataa=require('../controller/user')
var userControl =require('../controller/user')

/* GET users listing. */

router.post('/login',alldataa.LOGINUSER);


router.post('/signup',alldataa.SIGNUPUSER);

router.get('/alldatasignupdata',userControl.cheakUser,alldataa.ALLUSERDATA);


module.exports = router;