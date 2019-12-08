//for wrapper function confirmation
// console.log(__filename);
// console.log(__dirname);
// console.log(module);
// console.log(module.parent);
// console.log(exports);

var path = require('path');

//Base name
// console.log(__filename);
// console.log(path.basename('/path_demo/path.js'));

//Delimiter
// console.log(path.delimiter); //for windows ->  ; 
// console.log(process.env.PATH.split(path.delimiter));

//Dir-name
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));

// Extension 
// console.log(path.extname(path.basename(__filename)));

// path format 
// console.log(path.format({
 // root:'C:\\',
 // dir:'foo\\subFolder\\ass',
 // base:'file.txt',
 // name:'file',
 // ext:'.txt'
 // }));


// Absolute path 
// console.log(path.isAbsolute('C:\\path_demos//file'));

// Join method 
// console.log(path.join('\\foo','folder','file'));

// Normalize method 
// .. -> represent previous folder

// console.log(path.normalize('\/\\/\/\/foo////folder///\/\/file'));


// parse method 
// console.log(path.parse("C:\\path_demo\\sass\\path.js").root);
// console.log(path.parse("C:\\path_demo\\sass\\path.js").dir);
// console.log(path.parse("C:\\path_demo\\sass\\path.js").base);
// console.log(path.parse("C:\\path_demo\\sass\\path.js").ext);
// console.log(path.parse("C:\\path_demo\\sass\\path.js").name);
// console.log(path.parse("C:\\path_demo\\sass\\path.js"));

// posix 
// console.log(path.posix);

// relative
// console.log(path.relative("Folder\\sub\\filed","Folder\\sub\\file\\task.txt"));

// Resolve method 
// console.log(path.resolve('Foo','folder','file\\text'));
// console.log(path.resolve("/folder","/file/pa_demo"));
// console.log(path.resolve());


console.log(path.resolve("test"));