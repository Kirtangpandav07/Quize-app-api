var express = require('express');
var router = express.Router();
var Allcategorys=require('../controller/control')
const CATEGORY=require('../model/category')
const userControl =require('../controller/user')


router.get('/allCategory',userControl.cheakUser,Allcategorys.ALLCATEGORY);

router.post('/addCategory',Allcategorys.ADDCATEGORY);

router.delete('/deleteCategory/:id',Allcategorys.DELETECATEGORY);

router.patch('/updateCategory/:id',Allcategorys.UPDATECATEGORY);


module.exports = router;
