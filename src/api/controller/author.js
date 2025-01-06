const { Author } = require("../model/author");

const getAuthors = async (req, res, next) => {
  try {
    const allAuthors = await Author.find().populate("libros");
    console.log("aqui estan los autores");
    return res.status(200).json(allAuthors);
  } catch (error) {
    console.error("Error obteniendo autores:", error.message);
    return res.status(400).json({ message: "Error obteniendo autores", error });
  }
};
const createAuthor = async (req, res, next) => {
  try {
    const newAuthor = new Author(req.body);
    const authorBBDD = await newAuthor.save();
    console.log("Autor creado:", authorBBDD);
    return res.status(201).json(authorBBDD);
  } catch (error) {
    console.error("Error creando autor:", error.message);
    return res.status(400).json({ message: "Error creando autor", error });
  }
};
const getAuthorById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const author = await Author.findById(id);
    return res.status(200).json(author);
  } catch (error) {
    return res.status(400).json({ message: "error al buscar por ID" }, error);
  }
};
const updateAuthors = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldAuthor = await Author.findById(id);
    const newAuthor = new Author(req.body);
    newAuthor._id = id;
    if (newAuthor.libros) {
      newAuthor.libros = [...oldAuthor.libros, ...newAuthor.libros];
    }
    const newAuthorSave = await Author.findByIdAndUpdate(id, newAuthor, {
      new: true,
    });
    return res.status(201).json(newAuthor);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "error al modificar los datos del author", error });
  }
};
const deleteAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteAuthor = await Author.findByIdAndDelete(id);
    return res.status(200).json(deleteAuthor);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "no puedo borrar ese autor" }, error);
  }
};

module.exports = {
  getAuthors,
  createAuthor,
  getAuthorById,
  updateAuthors,
  deleteAuthor,
};
