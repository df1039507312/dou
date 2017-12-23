

let fs = require('fs');
let isUser=function(username){
    let oData = JSON.parse(fs.readFileSync(__dirname+'/user.json'));
    return oData.some((val)=>{
        return val.username===username;
    })
}
module.exports=isUser;
// console.log(isUser('aaadd'));