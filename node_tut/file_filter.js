var fs = require('fs');
var path = process.argv[2];
var postfix = '.' + process.argv[3];

fs.readdir(path, function cb(err, files) {
    if (err) return console.error(err);

    var outputs = files.filter(function (value, index, array) {
        if(array[index].endsWith(postfix)) 
            console.log(array[index]);
    })
});