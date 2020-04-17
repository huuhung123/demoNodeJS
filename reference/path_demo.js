//path module
const path = require('path')

//Base file name
console.log(__filename, __dirname)
//D:\node-crash-course\reference\path_demo.js D:\node-crash-course\reference
console.log(path.basename(__filename))
//path_demo.js
//Directory name
console.log(path.dirname(__filename))
//D:\node-crash-course\reference
//File extension
console.log(path.extname(__filename))
//.js

//Create path object
console.log(path.parse(__filename))
// {
//     root: 'D:\\',
//     dir: 'D:\\node-crash-course\\reference',
//     base: 'path_demo.js',
//     ext: '.js',
//     name: 'path_demo'
// }
//Concatenate paths - ../test/hello.html
console.log(path.join(__dirname,'test','hello.html'))
//D:\node-crash-course\reference\test\hello.html
