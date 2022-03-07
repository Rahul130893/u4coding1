const express= require("express")

const app=express()

app.use(logger)

app.get("/books", (req, res)=>{
    res.send({route: "/books", permission:req.valid})
})


app.use(checkPermission("req.path"))


app.get("/libraries",  (req, res)=>{
    res.send({route:"/libraries", permission:req.valid})
})


app.get("/authors", (req, res)=>{
    res.send({route: "/authors", permission:req.valid})
})


function logger(req, res, next){
    console.log(req.path)
    next()
}

function checkPermission(x){
    return function  middle(req, res, next){
         if(req.path==="/libraries"){
            req.valid=true;
            next()
         } else if(req.path==="/authors"){
             req.valid=true;
            next()
         }

    }

}

app.listen(5000, ()=>{
    console.log("listening at 5000")
})