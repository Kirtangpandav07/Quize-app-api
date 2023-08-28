var express = require('express');
var router = express.Router();
const QUETIONS=require('../model/quetions')
var queController=require('../controller/control')
var userControl=require('../controller/user')

/* GET users listing. */

router.get('/allquestions', userControl.cheakUser, queController.ALLCONTECT);


router.post('/addquestions',queController.ADDCONTECT);


router.delete('/deletequestions/:id',queController.DELETECONTECT);


router.patch('/updatequestions/:id',queController.UPDATECONTECT);



module.exports = router;
