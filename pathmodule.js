
// path module of nodejs

const path = require('node:path');
 
// it print myfile.html which is basename of below full path
const a1 = path.basename('C:\\temp\\myfile.html');
console.log(a1);

// show directary path
const a2 = path.dirname('C:\\temp\\myfile.html');
console.log(a2);

// showing file extension e.g. .js. .html like this
const a3 = path.extname('index.html');
console.log(a3);

//shinwing current file extension
const a4 = path.extname(__filename);
console.log(a4);

//showing file name
console.log(__dirname,a4);


