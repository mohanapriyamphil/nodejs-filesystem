const http = require('node:http');
const fs = require('node:fs');
const port = 3000;

let currentDate = new Date().toLocaleString();
let date = `Current Date and Time: ${currentDate}`

const server = http.createServer((req, res) => {
// Write content
    fs.appendFileSync('./Files/29-23.txt', `\n ${date}`);

//Read Content
    fs.readFile('./Files/29-23.txt', 'utf8', (err, data) => {
        if(err) {
            console.error(err);
            return;
        } 
        console.log(data);
    });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to http server');
})

server.listen(port, () =>{
    console.log(`server listening on port ${port} happily`);
})