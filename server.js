
var express = require('express');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT;

var app = express();

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

app.use(express.static('Public'));

console.log("my socket server is running");

var socket = require('socket.io');

var io = socket(port);

io.sockets.on('connection' , newConnection);

function newConnection(socket)
{
  console.log('new connection  ' + socket.id);

  socket.on('people' , mouseMsg);

  function mouseMsg (data)
  {
    console.log(data);
  }

}
