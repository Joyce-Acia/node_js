var http = require('http');
// request, response
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("<h1>Hi, Welcome to the Node.js server!</h1>");
    res.end();
});

server.listen(8000);
console.log("Server is running on http://localhost:8000");

