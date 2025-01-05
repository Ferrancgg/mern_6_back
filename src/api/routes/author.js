const {getAuthors,createAuthor, getAuthorById}=require("../controller/author")
const authorRouter=require("express").Router()
authorRouter.get("/",getAuthors)
authorRouter.get("/:id",getAuthorById)
authorRouter.post("/",createAuthor)

module.exports=authorRouter