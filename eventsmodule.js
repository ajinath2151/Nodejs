// import enents
const EventEmitter = require('node:events');
const { access } = require('node:fs');
// extends EventEmitter in myEmitter to access its properties
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
// waterFull is event name it's my custom event
myEmitter.on('waterFull', () => {
  console.log('please turn of the motor!');
  setTimeout(() => {
    console.log("reminder for turn of the motor");
  }, 4000);
});
console.log("script is running");
console.log("still script is running......");
//when we emit event then only code inside myEmitter will run just like a function
myEmitter.emit('waterFull');