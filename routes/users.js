var express = require('express');
var router = express.Router();
let path = require('path');
let watch = require(path.join(__dirname,'../api/users/watch.js'));
let load = require(path.join(__dirname,'../api/users/load.js'));
let watchlong = require(path.join(__dirname,'../api/users/watchlong.js'));
let EventEmitter = require('events').EventEmitter;

let em = new EventEmitter();

/* GET users listing. */
// 查看当前用户状态
router.get('/watch',watch);


// 用户登录接口
router.post('/load',(req,res,next)=>{
    load(req,res,next,em);
});
// 长链接接口
router.get('/watchlong',(req,res,next)=>{
    watchlong(req,res,next,em);

});
// http流
router.get('/stream',(req,res,next)=>{
   
})


module.exports = router;
