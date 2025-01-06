const {
  getAllBooks,
  createBook,
  getBookById,
  deleteBook,
  updateBook,
} = require("../controller/book");

const bookRouter = require("express").Router();
bookRouter.get("/", getAllBooks);
bookRouter.get("/:id", getBookById);
bookRouter.post("/", createBook);
bookRouter.delete("/:id", deleteBook);
bookRouter.put("/:id", updateBook);

module.exports = bookRouter;
