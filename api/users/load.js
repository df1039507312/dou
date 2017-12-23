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
    dealMongodb().then((db)=>{
        let users = db.collection('users');
        if(!req.body.username||!req.body.userpwd){
            res.json({status:'no',msg:'请输入完整的用户名和密码'});
            return;
        }

        users.find({username:req.body.username}).toArray((err,data)=>{
            if(!err){
                if(data.length!==0){
                    if(data[0].username===req.body.username&&data[0].userpwd===req.body.userpwd){
                        let loading=String(new Date().getTime());
                        users.update({username:req.body.username},{$set:{loading}},()=>{
                            res.json({status:'ok',loading,msg:'登录成功'});
                            em.emit('success');
                        })
                        
                    }else{
                        res.json({status:'no',msg:'密码不正确'})
                    }
                }else{
                    res.json({status:'no',msg:'用户名不存在'})
                }
                
            }
        })
    })
}