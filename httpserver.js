const http = require('http');

//process.env.PORT Provide serverless architecture if not set then i define 3000 default port
// and it actually responds just open localhost:3000
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end("<h1>This is response from node server create by ajinath</h1>")
});
// server.listen("server is listen in port : " + port)

server.listen(port, () => {
    console.log("server is listening : " + port);
});