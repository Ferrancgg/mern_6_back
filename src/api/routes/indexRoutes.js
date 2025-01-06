const authorRouter = require("./author");
const bookRouter = require("./book");
const indexRouter = require("express").Router();
indexRouter.use("/author", authorRouter);
indexRouter.use("/book", bookRouter);
module.exports = indexRouter;
