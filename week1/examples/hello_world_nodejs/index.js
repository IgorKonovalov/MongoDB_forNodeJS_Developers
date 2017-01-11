let http = require('http');

let server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello, World!");
})

server.listen(8000);

console.log("Сервер запущен на http://localhost:8000");
