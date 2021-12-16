const fs = require('fs')
fs.readFile('writefile.js', (err, data) => {
    if (err)
        console.log('Error file not found');
    else console.log(data.toString())
});