const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const myquetions = new Schema({
   questions:{
    type:String,
    unique:true
   },
   options:[String],
   answer:String,
   category:{ type: Schema.Types.ObjectId,ref: 'category'}
});

const QUETIONS = mongoose.model('quetions',myquetions)

module.exports = QUETIONS;
