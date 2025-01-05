const {getAuthors,createAuthor}=require("../controller/author")
const authorRouter=require("express").Router()
authorRouter.get("/",getAuthors)
// authorRouter.get("/:id",)
authorRouter.post("/",createAuthor)

module.exports=authorRouter