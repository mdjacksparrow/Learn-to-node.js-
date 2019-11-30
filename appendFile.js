var fs = require('fs');

fs.appendFile('test.txt','This is append data',function(err) {
 if(err) throw err;
 console.log('Saved!');
});