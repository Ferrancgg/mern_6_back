const Book = require("../model/book")

const getAllBooks=async(req,res,next)=>{try{
    const allBooks= await Book.find()
    console.log("aqui estan todos los libros")
    return res.status(200).json(allBooks)

}catch(error){
    console.log(error.message)

return res.status(400).json({message:"error al obtener los datos de libros"},error)}

}
const createBook=async(req,res,next)=>{

    try{
        const newBook= new Book(req.body)
        const bookBBDD= await newBook.save()
        console.log("libro creado")
        return res.status(201).json(newBook)

    }
    catch(error){console.log(message.error)
        return res.status(400).json({message:"error al grabar un nuevo libro"},error)
        
    }
}
const getBookById=async(req,res,next)=>{
    try{
        const {id}=req.params
        const book=await Book.findById(id)
        return res.status(200).json(book)

    }
    catch(error){
        return res.status(400).json({message:"error al buscar libro por ID"},error)
    }

}
const deleteBook=async(req,res,next)=>{
    try{
        const {id}=req.params
        const book=await Book.findByIdAndDelete(id)
        return res.status(200).json(book)

    }
    catch(error){
        return res.status(400).json({message:"error al borrar libro por ID"},error)
    }
}
const updateBook=async(req,res,next)=>{
    try{
        const {id}=req.params
        const oldBook=await Book.findById(id)
        const newBook= new Book(req.body)
        newBook._id=id
        if (newBook.author){[...oldBook,...newBook]}

        // introducir logica para fusionar las dos coleccines 
        const bookUpdate= await Book.findByIdAndUpdate(id,newBook,{new:true})

    }
    catch(error){
        return res.status(400).json({message:"error al modificar Book"},error)
    }

}

// const updateBook = async (req, res, next) => {
//     try {
//         const { id } = req.params; // ID del libro a actualizar
//         const updatedData = req.body; // Datos nuevos para actualizar

//         // Validar si existe el libro antes de actualizar
//         const oldBook = await Book.findById(id);
//         if (!oldBook) {
//             return res.status(404).json({ message: "El libro no existe." });
//         }

//         // Si hay un cambio de autor, actualizar la relación con el autor anterior y el nuevo
//         if (updatedData.author && updatedData.author !== oldBook.author.toString()) {
//             // Remover el libro del array `books` del autor anterior
//             await Author.findByIdAndUpdate(oldBook.author, { $pull: { books: id } });

//             // Agregar el libro al array `books` del nuevo autor
//             await Author.findByIdAndUpdate(updatedData.author, { $push: { books: id } });
//         }

//         // Actualizar el libro con los nuevos datos
//         const bookUpdate = await Book.findByIdAndUpdate(id, updatedData, { new: true });

//         return res.status(200).json({
//             message: "Libro actualizado correctamente.",
//             data: bookUpdate
//         });
//     } catch (error) {
//         console.error("Error al modificar Book:", error);
//         return res.status(400).json({ message: "Error al modificar Book", error });
//     }
// };



module.exports={getAllBooks,createBook,getBookById,updateBook,deleteBook}