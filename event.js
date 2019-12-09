var Event = require("events");

class MyEmitter extends Event
{

}

// Init Event 
const myEmitter = new MyEmitter();

// To create on event 
myEmitter.on("First",() => {
 console.log("Event Fired On !");
});

// to call the event 
myEmitter.emit("First");

