/* importa as configurações do servidor. */
var app = require('./config/server');

/* parametrizar a porta de escuta */
var server = app.listen(80, function(){
    console.log('Servidor Online!');
});

var io = require('socket.io').listen(server);

app.set('io', io);
/* cria a conexão por WebSocket */

io.on('connection', function(Socket){
    console.log('Usuario conectou');

    Socket.on('disconnect', function(){
        console.log('Usuario desconectou');
    })
});