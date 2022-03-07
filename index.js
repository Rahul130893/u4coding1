const express= require("express")

const app=express()

app.use(logger)

app.get("/books", (req, res)=>{
    res.send({route: "/books"})
})

app.get("/libraries", (req, res)=>{
    res.send({route:"/libraries", permission: true})
})


app.get("/authors", (req, res)=>{
    res.send({route: "/authors", permission:true})
})


function logger(req, res, next){
    console.log(req.path)
    next()
}

app.listen(5000, ()=>{
    console.log("listening at 5000")
})