const http = require('http'); //in-built
const fs = require('fs'); //in-built
const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/': filename = 'index.html';
        case '/index': filename = 'index.html';
        case '/home': filename = 'index.html'; break;
        case '/login': filename = 'login.html'; break;
        case '/contact': filename = 'contact.html'; break;
        case '/services': filename = 'services.html'; break;
        default: filename = '404.html';
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('Hiiii');
    fs.readFile('htmlfiles/' + filename, (err, data) => {
        if (err) res.end('404 Page Not found')
        else res.write(data.toString())
        res.end('bye')
    })
});
server.listen(4042);


// go to website
/*
client reached website
request
server handles the request
prepare for response
give response
clients makes another  request
*/