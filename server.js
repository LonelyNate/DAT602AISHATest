
var express = require('express');



var app = express();

app.use(express.static('Public'));

app.get('/', function(req, res) {	


     res.render('index');	
});

console.log("my socket server is running");

var socket = require ('socket.io');

