var url = process.argv[2];
var http = require('http');

http.get(url, function (resp) {
    resp.setEncoding('utf8').on('data', function (data) {
        console.log(data);
    })
})