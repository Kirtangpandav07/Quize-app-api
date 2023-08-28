const bcrypt = require('bcrypt');
const USER =require('../model/user')
var jwt = require('jsonwebtoken');


  exports.cheakUser=async(req,res,next)=>{
    try {
      // console.log(req.headers);
      let token = req.headers.authorization
      if (!token) {
        throw new Error("pleace attech token")
      }
      let decode =jwt.verify(token,"THIS-IS-QUIZE-GAME")

      let cheakuser =await USER.findById(decode.id)
      if (!cheakuser) {
        throw new Error("user not found")
      }
      next()
    } catch (error) {
      res.status(404).json({
        status:"fail",
        message:error.message,
      })
    }

  }


  exports.SIGNUPUSER=async function(req, res, next) {
    try {
      if (!req.body.username || !req.body.email || !req.body.password) {
        throw new Error("please enter valid fields")
      }
      req.body.password = await bcrypt.hash(req.body.password,10)
      const data =await USER.create(req.body)
      res.status(201).json({
        status:"succsess",
        message:"user created successfully",
        data : data
      })
  
    } catch (error) {
      res.status(404).json({
        status:"fail",
        message:error.message,
      })
      
    }
  }

  exports.LOGINUSER=async function(req, res, next) {
    try {
      const cheakuser =await USER.findOne({email:req.body.email})
      if (!cheakuser) {
        throw new Error("INVALID EMAIL")
      }
  
      const cheakPass= await bcrypt.compare(req.body.password,cheakuser.password)
      if (!cheakPass) {
        throw new Error("INVALID PASSWORD")
      }
      
      const token=jwt.sign({id:cheakuser._id},"THIS-IS-QUIZE-GAME")
      res.status(200).json({
        status:"success",
        message:"login successfully",
        data:cheakuser,
        token
      })
    } catch (error) {
      res.status(404).json({
        status:"fail",
        message:error.message
      })
      
    }
  }


  exports.ALLUSERDATA=async function(req, res, next) {
    try {
      const data =await USER.find()
      res.status(200).json({
        status:"succsess",
        message:"All users found",
        data : data
      })
  
    } catch (error) {
      res.status(404).json({
        status:"fail",
        message:error.message,
      })
      
    }
  }