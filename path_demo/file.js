var path = require('path');
var fs = require('fs');

// fs.mkdir(path.resolve("test"),{},err => {
//  if(err) throw err;

//  console.log("Folder created !");
// });


// File created 
// fs.writeFile("./test/demo.txt",'Data are write !','utf8',(err) => {
//  if(err) throw err;
//  console.log("File created !");
// });

//Append file
fs.appendFile(path.resolve("test/demo_1.txt"), "More data are appended !", "utf8", err => {
  if (err) throw err;
  console.log("File updated !");
});