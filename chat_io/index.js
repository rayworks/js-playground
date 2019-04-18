var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http)


app.get('/', function(req, resp){
    resp.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    console.log('An user connected');

    socket.on('chat message', function(mesage){
        //console.log('message: ' + mesage);
        io.emit('chat message', mesage);
    })
    socket.on('disconnect', function(){
        console.log('user disconnected');
    })
});

http.listen(3000, function(){
    console.log('listening on *:3000');
})