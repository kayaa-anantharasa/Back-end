 const mongoose =require("mongoose");
 const infoSchema = mongoose.Schema({
     category:{
         type:String,
         required:true,
         trim:true
     },
     subCategory:{
         type:String,
         required:true
     }   
 })

  module.exports = mongoose.model("Info",infoSchema);