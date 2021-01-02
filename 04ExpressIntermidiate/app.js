const express = require("express");
const app = express();

var myconsolelog = function(req,res,next){
    console.log("I am Middleware");
    next();
};

app.get("/" , (req,res)=>{
    res.send("Hello World!"+res.resquestTime);
});

app.listen(3000, ()=> console.log("Server is running at port 3000...."));