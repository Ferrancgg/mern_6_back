console.log("hola mundo")
const express=require("express")
const app=express()
const PORT=3000
app.use("/api/v1",(req,res,next)=>{
    return res.status(200).json("esto funciona")
})
app.use("*",(req,res,next)=>{
    return res.status (404).json("no tengo nada que ofrecerte")

})
app.listen (PORT,()=>{console.log(`estoy conectado al puerto http://localhost${PORT}`
)})
