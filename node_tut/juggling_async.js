var http = require('http');
var bl = require('bl');

var map = {};

var firstUrl = process.argv[2];
var secondUrl = process.argv[3];
var thirdUrl = process.argv[4];

function loadData(url, url2, url3) {
    http.get(url, function (response) {
        response.pipe(bl(function (err, data) {
            if (err) console.error(err);
            else {
                map[url] = data.toString();

                if (map[firstUrl] && map[secondUrl] && map[thirdUrl]) {
                    console.log(map[firstUrl]);
                    console.log(map[secondUrl]);
                    console.log(map[thirdUrl]);
                }
            }
        }));
    });
}

loadData(firstUrl, map);
loadData(secondUrl, map);
loadData(thirdUrl, map);
