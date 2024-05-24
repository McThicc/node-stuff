const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request made');
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
})

// local host is like a domain name
// takes us to a loop back ip address
// 127.0.0.1
// points directly back to the computer

// port numbers are like doors into a computer
// every application uses a different port number
// our server needs its own port number
// 3000 is popular for local web development
// localhost:3000
