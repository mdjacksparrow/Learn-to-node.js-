var http = require("http");
var dt = require("./myFirstModule");

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("The date and time currently : " + dt.myDateTime());
    res.end("Hello World!");
  })
  .listen(9524);
