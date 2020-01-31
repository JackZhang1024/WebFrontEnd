path 路径操作模块

zfz:~ zhangfengzhou$ node
> path.basename('/users/a/b.js')
'b.js'
> path.basename('/users/a/b.js','.js')
'b'
> path.basename('/users/a/b.js','.html')
'b.js'
> path.dirname('/users/a/b.js','.html')
'/users/a'
> path.dirname('/users/a/b.js')
'/users/a'
> path.dirname('/users/a/b.html')
'/users/a'
> path.extname('/users/a/b.html')
'.html'
> path.extname('/users/a/b.js')
'.js'
> path.isAbsolute('/users/a/b.js')
true
> path.isAbsolute('../a/b.js')
false
> path.parse('/users/a/b.js')
{ root: '/', dir: '/users/a', base: 'b.js', ext: '.js', name: 'b' }
> path.join('/users/a','b')
'/users/a/b'
> path.join('/users/a','b','c','d')
'/users/a/b/c/d'
> path.join('/users/a','b','c','/d')
'/users/a/b/c/d'
> 

node 中非模块成员（其他成员）

在每个模块中，除了 require, exports 等模块相关API之外，还有两个特殊的成员
__dirname "动态获取 "  可以用来获取当前文件模块所属目录的路径
__filename "动态获取" 可以用来获取当前文件的绝对路径


在文件操作中， 使用相对路径是不可靠的，因为在Node中文件操作的路径设计为相对于node命令
所处的路径

解决方法，使用绝对路径 __dirname 或者 __filename

### 路由设计

| 路径      | 方法 | get参数 | post参数                 | 是否需要登录 | 备注         |
| --------- | ---- | ------- | ------------------------ | ------------ | ------------ |
| /         | GET  |         |                          |              | 渲染首页     |
| /register | GET  |         |                          |              | 渲染注册页面 |
| /register | POST |         | email, nickname,password |              | 处理注册页面 |
| /login    | GET  |         |                          |              | 渲染登录页面 |
| /login    | POST |         | email, password          |              | 处理登录页面 |
| /logout   | GET  |         |                          |              | 处理退出登录 |




