let MongoClient = require('mongodb').MongoClient;
function createMongoConnect(mongodbUrl){
    return new Promise((reslove,reject)=>{
        MongoClient.connect(mongodbUrl,(err,db)=>{
            if(!err){
                reslove(db);
            }
        })
    })
}
module.exports=function(databaseName,fn){
    let mongodbUrl = 'mongodb://localhost:27017/'+databaseName;
    createMongoConnect(mongodbUrl).then((db)=>{
        fn&&fn(db);
    })
    
}

