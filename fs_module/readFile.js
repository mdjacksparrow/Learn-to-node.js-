var http = require('http');
var fs = require('fs');

var server = http.createServer((req,res) => {
 fs.readFile('./resume.pdf',(err,data) => {
  res.writeHead(200, { "Content-Type": "pdf" });
  res.write(data);
  console.log(data);
  res.end();
 });
});

server.listen(8080);