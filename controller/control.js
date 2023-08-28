const QUETIONS=require('../model/quetions')
const CATEGORY=require('../model/category')


exports.ALLCONTECT= async function(req, res, next) {
    try {
      const data =await QUETIONS.find().populate('category')
      res.status(201).json({
        status:"sucess",
        message:"all data created",
        data:data
      })
    } catch (error) {
      res.status(404).json({
        status:"fail",
        message:error.message,
        
      })
    }
  }

  exports.ADDCONTECT=async function(req, res, next) {
    try {
      if (!req.body.questions || !req.body.options || !req.body.category ||!req.body.answer) {
        throw new Error("please enter your fields")
      }
      const addque =await QUETIONS.create(req.body)
      res.status(201).json({
        status:"sucess",
        message:"data created successfully",
        data:addque
      })
      
    } catch (error) {
      res.status(404).json({
        status:"fail",
        message:error.message,
        
      })
    }
  }

  exports.DELETECONTECT=async function(req, res, next) {
    try {
      await QUETIONS.findByIdAndDelete(req.params.id)
      res.status(201).json({
        status:"sucess",
        message:"data deleted succesfully",
      })
    } catch (error) {
      res.status(404).json({
        status:"fail",
        message:error.message,
        
      })
    }
  }

  exports.UPDATECONTECT=async function(req, res, next) {
    try {
      await QUETIONS.findByIdAndUpdate(req.params.id,req.body)
      res.status(201).json({
        status:"sucess",
        message:"data updated succesfully",
      })
    } catch (error) {
      res.status(404).json({
        status:"fail",
        message:error.message,
        
      })
    }
  }



  // category

  exports.ALLCATEGORY=async function(req, res, next) {
    try {
      const data =await CATEGORY.find()
      
      res.status(201).json({
        status:"sucess",
        message:"all data created",
        data:data
      })
    } catch (error) {
      res.status(404).json({
        status:"fail",
        message:error.message,
        
      })
    }
  }

  exports.ADDCATEGORY=async function(req, res, next) {
    try {
      if (!req.body.name || !req.body.image) {
        throw new Error("please enter your fields")
      }
      const data =await CATEGORY.create(req.body)
      res.status(201).json({
        status:"sucess",
        message:"data created successfully",
        data:data
      })
      
    } catch (error) {
      res.status(404).json({
        status:"fail",
        message:error.message,
        
      })
    }
  }

  exports.DELETECATEGORY=async function(req, res, next) {
    try {
      await CATEGORY.findByIdAndDelete(req.params.id)
      res.status(201).json({
        status:"sucess",
        message:"data deleted succesfully",
      })
    } catch (error) {
      res.status(404).json({
        status:"fail",
        message:error.message,
        
      })
    }
  }

  exports.UPDATECATEGORY=async function(req, res, next) {
    try {
      await CATEGORY.findByIdAndUpdate(req.params.id,req.body)
      res.status(201).json({
        status:"sucess",
        message:"data updated succesfully",
      })
    } catch (error) {
      res.status(404).json({
        status:"fail",
        message:error.message,
        
      })
    }
  }

  