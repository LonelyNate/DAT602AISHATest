
var express = require('express');

var server = process.env.PORT || 5000;

var app = express();

app.use(express.static('Public'));

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
