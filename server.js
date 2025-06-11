var http = require('http');
// request, response
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    switch (req.url) {
        case '/about':
            res.write('<h1>This is Home/About Page</h1>');
            break;
        case '/profile':
            res.write('<h1>This is About Page</h1>');
            break;
        case '/product':
            res.write('<h1>This is Product Page</h1>');
            break;
        default:
            res.write('<h1>404 Not Found...Why Is It Called 404? Cause 4 Means Dead!!! plz laugh</h1>');
    }
});

server.listen(8000);
console.log("Server is running on http://localhost:8000");

