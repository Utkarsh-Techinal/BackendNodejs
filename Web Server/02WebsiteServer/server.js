//Import the required packages for Server.
const http = require('http');
const url = require('url');
const fs = require('fs');  
const path = require('path');

//Initialization of Variables
const hostname = '127.0.0.1';
const port = 5001;

//Supporting Files from Server.
const mineTypes = {
    'html': 'text/html',
    'css' : 'text/css',
    'js' : 'text/javascript',
    'png': 'image/png',
    'jpeg':'image/jpeg',
    'jpg': 'image/jpg'
};

// Create the Server
http.createServer((req,res) => {
    //Extracting the file name from URL
    var myuri =url.parse(req.url).pathname
    var filename = path.join(process.cwd(), unescape(myuri));
    console.log('File you are looking for is:'+ filename);
    var loadFile;
    

    // Loading file
    try{
        loadFile = fs.lstatSync(filename);
    }catch(error){
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write("404 page not found");
        res.end();
        return;
    }

    //Checking the file type supported by server
    //Is it it a File
    if(loadFile.isFile()){
        var mimeType = mimeType[path.extname(filename).split('.').reverse()[0]];
        res.writeHead(200 , {'Content-Type': mimeType});
        var filesysytem = fs.createReadStream(filename);
        filestram.pipe(res)
    }
    // Is it a Directory
    else if (loadFile.isDirectory()){
        res.writeHead(302, {'Location' : 'index.html'});
        res.end();
    }
    //And If it is not a file nor the directory then send internal server error.
    else{
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.write('500 Internal Server error');
        res.end();
    }    
}).listen(port, hostname, ()=> {
    console.log(`Server is running at port : ${port}`);
})