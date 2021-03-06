var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var bitfile = 'index.html';

fs.readFile(bitfile, function (err, data) {
    if (err) throw err;
    app.get('/', function(request, response) {
	response.write(data);
    });
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});