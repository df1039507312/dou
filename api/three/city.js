
let fs = require('fs');
module.exports=function(req,res,next){
    res.json(JSON.parse(fs.readFileSync(__dirname+'/city.json')).city[req.query.pid]);
}