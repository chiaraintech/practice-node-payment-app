const http = require('http');
const port = 3000;
const fs = require('fs');

const server = http.createServer(function(req, res) {           //It takes a single function which is the req and the res parameters.
    res.writeHead(200, { 'Content-Type': 'text/html' });        //Tell the browser that we'll write HTML. First param: status code of this operation. Second param: the header that I want to set and one of those headers is Content-Type (the key of our object) and the value of that object will be the sent value of type html. 
    fs.readFile('index.html', function(error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Error: file not found.')
        } else {
            res.write(data)
        }
        res.end();
    })
});       

server.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port ' + port)
    }
});