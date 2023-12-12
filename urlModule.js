
import url from 'node:url';

const myURL = new URL('https://example.org:3000'); // url
myURL.pathname = '/a/b/c'; // pathname
myURL.search = '?d=e'; //get parameters
myURL.hash = '#fgh'; //url hash for navigate

console.log(myURL);
//full url object
console.log(myURL.href);