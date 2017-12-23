let events = require('events');//引入events模块
let EventsEmmitter = events.EventEmitter;//这是一个构造器；

let em = new EventsEmmitter();//创建了一个events实例
// 注册事件 a
em.on('a',()=>{
    console.log('a执行了');
})
em.once('b',()=>{
    console.log('b执行了');
})
console.log('cccc');
// 触发事件
em.emit('a');
em.emit('a');
em.emit('b');
em.emit('b');