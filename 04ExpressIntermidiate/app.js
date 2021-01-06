const express = require("express");
const app = express();

// use of Next: This function is done with crontrolling & Send the control to app.get
var myconsolelog = function(req,res,next){
    console.log("I am Middleware");
    next();
};
var servertime = function(req, res, next){
    req.requestTime = Date.now()
    next();
}

app.use(servertime);
app.get("/" , (req,res)=>{
    res.send("Hello World!"+" Now its Time : "+req.requestTime);
    console.log("Hello from app Get /")
});


app.listen(3000, ()=> console.log("Server is running at port 3000...."));