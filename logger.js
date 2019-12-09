var uuid = require('uuid');
const MyEmitter = require('events');

class Event extends MyEmitter
{
 log(msg)
 {
  this.emit('message',{id: uuid.v4(),msg});
 }
}

// const obg = new Demo();
// obg.on('message',(data) => console.log("listner called",data));