const fs = require('fs');
fs.unlink('demo.txt',(err)=>{
    err?console.log('error! Not Found'):console.log('found and deleted')
});
fs.rmdir('src',(err)=>{
    err?console.log('error! Not Found'):console.log('found and deleted')
});