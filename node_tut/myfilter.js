var path = process.argv[2];
var postfix = process.argv[3];

var mymodule = require('./mymodule')
mymodule(path, postfix, function cb(err, data) {
    if (err) {
        console.log(err);
    }
    else {
        data.forEach(
            element => {
                console.log(element);
            });
    }

});