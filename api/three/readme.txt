1. 获取省份的接口
url： http://localhost:3000/three/province
方式 ：get
请求参数    无
返回数据   [{id:,name:}]

2. 返回对应城市接口
url：http://localhost:3000/three/city
方式：get
请求参数：{pid:省份id}
返回数据：[{id:,name:}]

3. 返回对应区域接口
url：http://localhost:3000/three/district
方式：get
请求参数：{cid:城市id}
返回数据：[{id:,name:}]

