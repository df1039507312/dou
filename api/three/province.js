let fs = require('fs');
module.exports=function(req,res,next){
    res.set('Access-Control-Allow-Origin','*');
    res.json(JSON.parse(fs.readFileSync(__dirname+'/province.json')).province);
}