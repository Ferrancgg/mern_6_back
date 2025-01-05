const { timeStamp } = require("console")
const mongoose=require("mongoose")
const {Schema,model}=mongoose
// const { Script } = require("vm")
const authorSchema= new Schema(
    {nombre:{type:String, required:true},
    nacionalidad:{type:String,required:true},
    // nacimiento:{type:Date,require:true},
    libros:{type:[String],required:true},

},{timestamps:true}
) 

const Author=model('Author',authorSchema)

module.exports={Author}