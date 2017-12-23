let fs = require('fs');
module.exports=function(req,res,next){
    res.json(JSON.parse(fs.readFileSync(__dirname+'/district.json')).district[req.query.cid]);

}