var fs = require('fs');

fs.writeFile('writedFile.txt','New content was writed down!',function (err) {

 if(err) throw err;
 console.log('Replaced!');
});