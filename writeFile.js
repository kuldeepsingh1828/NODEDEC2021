//filsystem -- fs module
const fs = require('fs')
fs.writeFile('src/data.txt', 'this is just a demo for Fs module.', (err) => {
    if (err)
        console.log('file Not created')
    else
        console.log('File Created')
});