var fs = require('fs');
var path = process.argv[2];

var str = fs.readFileSync(path).toString();
console.log(str.split('\n').length - 1);
 
