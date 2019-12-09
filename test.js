var Logger = require('./logger');

const obj = new Demo();

obj.on('message',(data) => console.log("Lister called !",data));