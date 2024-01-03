
// file system module of nodejs
//import
const fs = require('fs');
// fs.readFile('file.txt','utf-8',(err,data)=>{
//     // error = null and data = this is file (this is file data available in the file.txt)
//     console.log(err,data)
// })
//below line print first because till the callback go that file.txt and collect data this console.log will finish his work
// console.log("finish reading file.txt");

//read file synch
// const a = fs.readFileSync('file.txt'); 
// console.log(a);
// console.log(a.toString);
// console.log("finish reading file.txt");

// write file
// fs.writeFile("file2.txt", 'this is data of file2.txt',() =>{
//     console.log("written to the file2.txt ")
// });
// console.log("finish writing data to file2.txt");

// write file synch
a = fs.writeFileSync('file2.txt',"data of file2.txt synch and latest")
    console.log(a);
console.log("finish writing data to file2.txt");
