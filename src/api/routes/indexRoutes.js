// const authorRouter = require("./author")

const authorRouter = require("./author")
const indexRouter=require("express").Router()
indexRouter.use("/author",authorRouter)
module.exports=indexRouter
