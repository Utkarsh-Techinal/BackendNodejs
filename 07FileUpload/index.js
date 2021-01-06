const express = require('express');
const ejs = require('ejs');
const multer = require('multer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;


//set-up for ejs

app.set("view engine","ejs");
app.get("/", (req,res)=>{
    res.send("Multer is going fine");
});

app.listen(port, ()=> console.log(`Server is running at ${port}`));

