var express = require('express');

var app = express.createServer(express.logger());

var bitbuf = fs.readFile(index.html)

var bitpage = bitbuf.toString("utf-8")

fs.readFile(index.html, 'utf8', function(err, data) {
    if (err) throw err;
    console.log('OK: ' + index.html);
    console.log(data)}


app.get('/', function(request, response) {
  response.write(bitpage);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});