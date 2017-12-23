let sio = require('socket.io');//引入该模块，这个对象是一个函数
let ss=sio();
let sioServer=ss.listen(8000);

sioServer.on('connection',(socket)=>{
    
    // 接受浏览器的数据
    socket.on('toServer',(data)=>{
        console.log(data);
        // 给浏览器发送数据
        socket.broadcast.emit('toClient',data);
    })
})