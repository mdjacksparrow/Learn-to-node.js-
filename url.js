var url = require('url');

let demo_url =
  "https://www.myWebsite.com:4000/folder/sub-folder/index.html?id=400&statuscode=200";

const myUrl = new URL(demo_url);


// To print full url 
console.log(myUrl.href);
console.log(myUrl.toString());

// To print port num
console.log(myUrl.port);

// to print protocol 
console.log(myUrl.protocol);

// to print pathname 
console.log(myUrl.pathname);

// to print what searched
console.log(myUrl.search);

// To print search elements 
console.log(myUrl.searchParams);

// to print hose name 
console.log(myUrl.hostname);

// To add new param 
myUrl.searchParams.append("content",5);
console.log(myUrl.searchParams);