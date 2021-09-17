var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public/css'));

app.get('/', function(req, res, next) {
    res.sendFile(__dirname + '/frontend.html');
});

app.listen(3000);
