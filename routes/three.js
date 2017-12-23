let express = require('express');
let router = express.Router();
let path = require('path');
let province = require(path.join(__dirname,'../api/three/province.js'));
let city = require(path.join(__dirname,'../api/three/city.js'));
let district = require(path.join(__dirname,'../api/three/district.js'));
let provincejsonp = require(path.join(__dirname,'../api/three/provincejsonp.js'));
//获取所有省份的接口
router.get('/province',province);
// 获取对应城市的接口
router.get('/city',city);
// 获取对应的区域的接口

router.get('/district',district);

// 利用jsonp得到所有的省份的数据
router.get('/provincejsonp',provincejsonp)


module.exports=router;