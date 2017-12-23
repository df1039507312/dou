let fs = require('fs');
let path = require('path');

module.exports = function(req,res,next){
    let webRoot=path.join(__dirname,'../public');
    let webPath = path.join(webRoot,req.path);
    if(fs.existsSync(webPath)){
      if(fs.statSync(webPath).isDirectory()){
        let data=fs.readdirSync(webPath).map((val)=>{
          return {
            content:val,
            path:'http://localhost:3000'+req.path+val
          }
        });
        // console.log(data);
        res.render('dirlist',{data});
      }
    }else{
      next();
    }
    
  }
