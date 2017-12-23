let sio = require('socket.io')();
sio.listen(8000);

sio.on('connection',(socket)=>{
    socket.on('b',(data)=>{
        console.log(data);
        socket.broadcast.emit('a',data)
    })
})