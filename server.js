
// This function handles an incoming "request"
// And sends back out a "response";
var handleRequest = function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
};

// HTTP module
var http = require('http');

// Create a server with the handleRequest callback
var server = http.createServer(handleRequest);
// Listen on port 8080
server.listen(8080);

console.log('Server started on port 8080');







/*
var express = require('express');



var app = express();

app.use(express.static('Public'));

app.get('/', function(req, res) {	


     res.render('index.html');	
});

console.log("my socket server is running");

var socket = require ('socket.io');

io.sockets.on('connection' , newConnection);

function newConnection(socket)
{
      console.log('new connection  ' + socket.id);
     socket.on('people' , mouseMsg);
     function mouseMsg (data)
     {
          console.log(data)
     }
}
*/
