var net = require('net');
var port = process.argv[2];

function twoDigitsStr(num) {
    var str = num.toString();
    if(str.length == 1) {
        return '0' + str;
    }
    return str;
}

var server = net.createServer(function (socket) {
    var date = new Date();

    var time = '';
    var year = date.getFullYear();
    time += year.toString();
    time += '-';

    var month = date.getMonth() + 1;
    time += twoDigitsStr(month);
    time += '-';

    var day = date.getDate();
    time += twoDigitsStr(day);
    time += ' ';

    var hour = date.getHours();
    time += twoDigitsStr(hour);
    time += ':';

    var min = date.getMinutes();
    time += twoDigitsStr(min);
    time += '\r\n';

    socket.end(time);
});

server.listen(Number(port));