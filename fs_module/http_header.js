//create a variable to store http module
var http = require("http");

// create server Object
http.createServer(function(req, res) {
    res.write('hello'); //response to the client port
    res.writeHead(200,{'Content-Type' : 'text/html'}); //which type of the response to the client
    res.end(); //response ending
  }).listen(9524); //check the port number
