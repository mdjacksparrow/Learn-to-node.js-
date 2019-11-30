var http = require('http');

const server = http.createServer(function (req,res) 
{
  res.write('Hello world');
  res.end();
});

server.listen(8080);