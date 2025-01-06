const {
  getAuthors,
  createAuthor,
  getAuthorById,
  updateAuthors,
  deleteAuthor,
} = require("../controller/author");
const authorRouter = require("express").Router();
authorRouter.get("/", getAuthors);
authorRouter.get("/:id", getAuthorById);
authorRouter.post("/", createAuthor);
authorRouter.put("/:id", updateAuthors);
authorRouter.delete("/:id", deleteAuthor);

module.exports = authorRouter;
