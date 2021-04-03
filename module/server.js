var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public')); 
var PORT = 8000; 
app.listen(PORT);
console.log(`Running on port ${PORT}`);