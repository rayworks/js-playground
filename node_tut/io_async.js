var fs = require('fs');
var path = process.argv[2];

fs.readFile(process.argv[2], function cb(err, data) {
    if(err) {
        return console.log(err);
    }

    var str = data.toString();
    console.log(str.split('\n').length - 1);
});