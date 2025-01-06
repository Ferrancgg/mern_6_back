const Book = require("../model/book");

const getAllBooks = async (req, res, next) => {
  try {
    const allBooks = await Book.find();
    console.log("aqui estan todos los libros");
    return res.status(200).json(allBooks);
  } catch (error) {
    console.log(error.message);

    return res
      .status(400)
      .json({ message: "error al obtener los datos de libros" }, error);
  }
};
const createBook = async (req, res, next) => {
  try {
    const newBook = new Book(req.body);
    const bookBBDD = await newBook.save();
    console.log("libro creado");
    return res.status(201).json(bookBBDD);
  } catch (error) {
    console.log(message.error);
    return res
      .status(400)
      .json({ message: "error al grabar un nuevo libro" }, error);
  }
};
const getBookById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "error al buscar libro por ID" }, error);
  }
};
const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
    return res.status(200).json(book);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "error al borrar libro por ID" }, error);
  }
};
const updateBook = async (req, res, next) => {
  try {
    const { id } = req.id;
    const oldBook = Book.findById(id);
    const newBook = new Book(req.params);
    newBook._id = id;
    const bookUpdated = await Book.findByIdAndUpdate(id, newBook, {
      new: true,
    });

    return res.status(200).json(newBook);
  } catch (error) {
    return res.status(400).json({ message: "error al modificar Book" }, error);
  }
};

module.exports = {
  getAllBooks,
  createBook,
  getBookById,
  updateBook,
  deleteBook,
};
