var http = require('http');
var fs = require('fs');

fs.appendFile('./NewFile.txt','The data was appended',(err) =>{
  if(err) throw err;
  console.log('saved or created!');
 });
