const http = require('http');
const fs = require('fs');

//process.env.PORT Provide serverless architecture if not set then i define 3000 default port
// and it actually responds just open localhost:3000
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url); 
    res.setHeader('Content-Type', 'text/html');
    if(req.url=='/') {
        res.statusCode = 200;
        const data = fs.readFileSync("index.html")
        res.end(data.toString());
    }
    //static file server below run on localhost :3000/hello
    else if(req.url=='/hello') {
        res.statusCode = 200;
        res.end("<h1>This is response from node server create by ajinath..</h1>")
    }
    // try with / and /about in localhost :3000
    else if(req.url=='/about') {
        res.statusCode = 200;
        res.end("<h1>This is about content</>");
    }
    
    else {
        res.statusCode = 404;
        res.end("<h4>this page is not found on server....</>");
    }
});
// server.listen("server is listen in port : " + port)

server.listen(port, () => {
    console.log("server is listening : " + port);
});