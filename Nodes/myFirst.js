//create a variable to store http module
var http = require('http');

// create server Object 
http.createServer(function (req,res) 
{
  res.write('Hello world');
  res.end();
}).listen(9524);