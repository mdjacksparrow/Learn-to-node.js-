//create a variable to store http module
var http = require("http");

// create server Object
http.createServer(function(req, res) {
    res.write("Hello world"); //response to the client port
    res.end(); //response ending
  })
  .listen(9524); //check the port number
