let path = require('path');

let mongodb = require(path.join(__dirname,'../mongodb.js'));

function dealMongodb(){
    return new Promise((reslove,reject)=>{
        mongodb('myserver',(db)=>{
            reslove(db);
        });
    })
}


module.exports=function(req,res,next,em){
    em.once('success',()=>{
        dealMongodb().then((db)=>{
            let users = db.collection('users');
            users.find({username:req.query.username}).toArray((err,data)=>{
                if(!err){
                    if(data[0].loading!==req.query.loading){
                        res.json({status:'no',msg:'已在别的地方登录'});
                    }else{
                        res.json({status:'ok',msg:'其他地方没有登录'});
                    }
                    
                }
            })
        })
    })
    
}