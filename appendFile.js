const fs = require('fs')
fs.appendFile('demo.txt', ' please add me.', (err) => {
    err ? console.log('Error') : console.log('Appended')
});