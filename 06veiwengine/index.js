const express = require("express");

let app = express();
var port = process.env.PORT || 3000;

app.set('views', path.join(__dirname,'views'));
app.set

app.get('/',(req,res) => {
    res.send("I am working fine...");
});

app.listen(port,()=>{
    console.log("Server is running...");
});