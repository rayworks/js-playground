var http = require('http');
var map = require('through2-map')

var port = process.argv[2];

var srv = http.createServer(function (req, resp) {
    if(req.method !== 'POST') {
        return resp.end('A post method is required\n');
    }

    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(resp)
})

srv.listen(Number(port));