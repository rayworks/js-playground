var http = require('http');
var url = require('url');
var map = require('through2-map')

var port = process.argv[2];

var srv = http.createServer(function (req, resp) {

    var parsed = url.parse(req.url, true)
    var routename = parsed.pathname;

    var start = parsed.path.indexOf('iso=');
    var fmtDate = '';
    var tm = 0;
    if (start >= 0) {
        fmtDate = parsed.path.substring(start + 4);
        tm = Date.parse(fmtDate);
    }

    if (routename == '/api/parsetime') {
        if (req.method !== 'GET') {
            return resp.end('A GET method is required\n');
        }

        var date = new Date(tm);
        var dat = {}
        dat.hour = date.getHours();
        dat.minute = date.getMinutes();
        dat.second = date.getSeconds();

        resp.writeHead(200, { 'Content-Type': 'application/json' })
        resp.end(JSON.stringify(dat));

    } else if (routename == '/api/unixtime') {
        // if (req.method !== 'POST') {
        //     return resp.end('A POST method is required\n');
        // }
        var obj = {};
        obj['unixtime'] = tm;

        resp.writeHead(200, { 'Content-Type': 'application/json' })
        resp.end(JSON.stringify(obj));
    } else {
        resp.writeHead(404).end();
    }
})

srv.listen(Number(port));
