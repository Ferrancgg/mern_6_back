const mongoose=require("mongoose")
const {Schema,model}=mongoose

const bookSchema = new Schema({
    title: { type: String, required: true },
    publicationDate: { type: Date,require:true },
    genre: { type: String,require:true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true },
},{timestamps:true});

const Book=model('Book',bookSchema)

module.exports=Book