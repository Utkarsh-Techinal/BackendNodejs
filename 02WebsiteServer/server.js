const http = require('http');
const url = require('url');
const fs = require('fs');  //package name cannot be changed.

const mineTypes = {
    html: 'text/html',
    css : 'text/css',
    js : 'text/javascript',
    png: 'image/png',
    jpeg:'image/jpeg',
    jpg: 'image/jpg'
};

http.createServer((req,res) => {
    var myuri =url.parse(req.url).pathname
    var filename = path.join(process.cwd(), unescape(myuri));
    console.log('File you are looking for is:'+ filename);

    var loadFile;
    try {
        loadFile = fs.lstatSync(filename);
    }catch(error){
        
    }
})