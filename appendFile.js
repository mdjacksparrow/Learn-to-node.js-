var fs = require('fs');

fs.appendFile('test.txt','data added!',function(err) {
 if(err) throw err;
 console.log('Saved!');
});