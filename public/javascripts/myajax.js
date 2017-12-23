function get(url,fn){
    var xml=XMLHttpRequest||ActiveXObject;//考虑ie的兼容
    var oHr = new xml();//实例化
    oHr.onreadystatechange=function(){
        if(this.readyState===4&&this.status===200){
            fn&&fn(this.responseText);
        }
    }
    oHr.open('GET',url);
    oHr.send();
} 

function post(url,fn,data){
    var xml=XMLHttpRequest||ActiveXObject;//考虑ie的兼容
    var oHr = new xml();//实例化
    oHr.onreadystatechange=function(){
        if(this.readyState===4&&this.status===200){
            fn&&fn(this.responseText);
        }
    }
    oHr.open('POST',url);
    var sendStr=null;//要发送的数据
    if(data){
        sendStr=JSON.stringify(data);
    }
    oHr.setRequestHeader('Content-Type','application/json');
    oHr.send(sendStr);
}

var my = {get:get,post:post};