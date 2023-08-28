const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mycatagory = new Schema({
    name:{
        type:String,
        unique:true
    },
    image:String
});

const CATEGORY=mongoose.model('category',mycatagory)

module.exports = CATEGORY;
