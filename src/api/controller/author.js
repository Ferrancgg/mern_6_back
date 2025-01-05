
const { Author } = require("../model/author");

const getAuthors = async (req, res, next) => {
    try {
        const allAuthors = await Author.find();
        console.log("aqui estan los autores")
        return res.status(200).json(allAuthors);
    } catch (error) {
        console.error("Error obteniendo autores:", error.message);
        return res.status(400).json({ message: "Error obteniendo autores", error });
    }
};

// Crear un nuevo autor
const createAuthor = async (req, res, next) => {
    try {
        const { nombre, nacionalidad, libros } = req.body;

        // Validar que los campos requeridos están presentes
        if (!nombre || !nacionalidad || !libros || !Array.isArray(libros)) {
            return res.status(400).json({ message: "Campos inválidos o faltantes" });
        }

        const newAuthor = new Author(req.body);
        const authorBBDD = await newAuthor.save();
        console.log("Autor creado:", authorBBDD);
        return res.status(201).json(authorBBDD);
    } catch (error) {
        console.error("Error creando autor:", error.message);
        return res.status(400).json({ message: "Error creando autor", error });
    }
};

const getAuthorById=async(req,res,next)=>{
    try{
        const {id}=req.params
        const author=await Author.findById(id)
        return res.status(200).json(author)

    }
    catch(error){
        return res.status(400).json({message:"error al buscar por ID"},error)
    }
   
}

module.exports = { getAuthors, createAuthor,getAuthorById };
