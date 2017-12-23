let wss = require('ws');//引入ws模块

let server=wss.Server;//得到了该模块上的Server类
let ws=new server({//实例化得到  ws服务器
    port:8000
})

ws.on('connection',(socket)=>{
    console.log(ws.clients.size);
   
    socket.on('message',(data)=>{//接受来自于浏览器的数据
        // console.log(data);

        ws.clients.forEach((val)=>{
            if(val!==socket){
                val.send(data);
            }
        })
    });
    
})
