var http = require('http');
var fs = require('fs')

var port = process.argv[2];
var path = process.argv[3];

var srv = http.createServer(function (req, resp) {
    // write http headers
    resp.writeHead(200, { 'content-type': 'text/plain' });

    var streamToRead = fs.createReadStream(path);
    streamToRead.pipe(resp);
})

srv.listen(Number(port));
