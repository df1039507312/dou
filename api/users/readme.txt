1. 用户登录的接口
url： http://localhost:3000/users/load
方式 ：post
请求参数    {username:,userpwd:}
返回数据   {status:'ok',msg:'',loading:登录标识}

2. 查看用户状态的接口
url：http://localhost:3000/users/watch
方式：get
请求参数：{username:,loading:登录标识}
返回数据：{status:'ok',msg:''}

3. 长链接查看用户状态接口
url：http://localhost:3000/users/watchlong
方式：get
请求参数：{username:,loading:登录标识}
返回数据：{status:'ok',msg:''}
