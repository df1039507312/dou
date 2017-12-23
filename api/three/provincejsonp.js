let fs = require('fs');

let path = require('path');

module.exports=function(req,res,next){
    let callback = req.query.callback;
    // 从json中读取数据
    let oData=JSON.parse(fs.readFileSync(path.join(__dirname,'province.json'))).province
    res.set('Content-Type','text/javascript');//设置响应的格式
    res.send(callback+'('+JSON.stringify(oData)+')');//发送js的文件
}