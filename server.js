var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '/client')));
app.listen(3000);