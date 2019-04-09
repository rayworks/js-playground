var fs = require('fs');
module.exports = function (dir, post, callback) {

    var ext = '.' + post;
    fs.readdir(dir, function cb(err, files) {
        if (err) { callback(err, null); }
        else {
            var arr = [];
            files.filter(function (value, index, array) {
                if (array[index].endsWith(ext))
                    arr.push(array[index]);
            })

            callback(null, arr)
        }
    });
}