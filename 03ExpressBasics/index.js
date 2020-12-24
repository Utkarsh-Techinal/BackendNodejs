//Create Routes in Express Js
const express = require('express');
const app = express();
// Navigation 
app.get('/',(req, res)=>{
    res.send("Hello I am Utkarsh");
});
app.get ('/priya',(req,res)=>{
    res.send("Hello Priya loves Utkarsh");
});
// Create route for contact us and Services
app.get('/flights/:from-:to',(req,res)=>{
    res.send(req.params);
});
app.delete('/del',(req,res)=>{
    res.send('Hello I am del');
});
//Status Code
// 200 -OK
// 403 - Forbidden
// 404 - File Not Found
// 500 - Internal Server Error

app.get("/about",(req,res)=>{
    res.status(404).json( {error: "Page Not found"});    
});
app.get("/about1",(req,res)=>{
    res.status(500).json( {error: "Something Went Wrong"});    
});

app.listen(3000, ()=>{
    console.log("Server is running at port 300 ...");
})