var http = require('http');

var server = http.createServer(function (request, response) {
    response.writeHead(200, {'Content-type': 'text/html; charset=UTF-8'});
    response.end('<h2>Wake up, Neo...</h2>\n');
});

// arrancamos el servidor

server.listen(1337, "127.0.0.1");
console.log('Servidor arrancado en 127.0.0.1:1337');


