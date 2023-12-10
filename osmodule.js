const os = require('os'); // dot(.) not required because it is built-in module

//freemem is function of node to show available memory in computer
console.log(os.freemem());
//showing host name
console.log(os.hostname()); 
//shining home directory address
console.log(os.homedir());

console.log(os.platform());
console.log(os.release());
console.log(os.totalmem());
console.log(os.type());
console.log(os.uptime());
console.log(os.version());