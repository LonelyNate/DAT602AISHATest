
var express = require('express');



var app = express();

app.use(express.static('Public'));

console.log("my socket server is running");

var socket = require ('socket.io');
