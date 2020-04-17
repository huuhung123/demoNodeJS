const fs = require('fs')
const path = require('path')

// Create folder
fs.mkdir(path.join(__dirname, 'test-one'), {}, err => {
    if (err) throw err;
    console.log('Folder created...');
})
fs.rmdir(path.join(__dirname, 'test-one'), (err) => {
    if (err) throw err;
    console.log('Folder is deleted...')
})

//xóa file: fs.unlink

// Create and write fo file (Hello World!I love Node.js (hello.txt))
fs.writeFile(path.join(__dirname,'test','hello-one.txt'),
'Hello World!', {} ,
 err => {
     if (err) throw err;
     console.log('File written to ...')
     //File append
     fs.appendFile(path.join(__dirname,'/test','hello-one.txt'),
     'I love Node.js',
      err => {
          if (err) throw err;
          console.log('File written to ...') //Asynchronous
      }
     )
 }
)

//Read file
fs.readFile(path.join(__dirname,'test','hello.txt'),{ encoding:'utf8'},(err, data) => {
    if(err) throw err;
    console.log(data)
})
// Rename file(folder)
fs.rename(
    path.join(__dirname, '/test', 'helloworld.txt'),
    path.join(__dirname,'/test', 'hello.txt'),
    err => {
        if(err) throw err;
        console.log('File renamed...')
    }
)