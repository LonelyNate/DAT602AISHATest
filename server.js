
var express = require('express');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT;

var app = express();

app.use(express.static('Public'));

console.log("my socket server is running");
