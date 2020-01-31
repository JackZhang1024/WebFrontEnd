- Express
- MongoDB

HTML-CSS-JS Prettify

JavaScript 天生不支持模块化
   require 第三方 AMD
   exports 第三方 CMD
   Node.js 才有的
在 浏览器中也可以像在Node中的模块一样来进行编程

`<script>` 标签来引用加载 而且你还必须考虑加载顺序问题

require.js 第三方库
sea.js  第三方库

以上两种方式可以不用再script标签写代码
一种浏览器中JS模块化的操作

在Node 这个环境中对JavaScript进行了特殊的模块化支持 CommonJS

CommonJS AMD CMD 都是民间搞出来的
EcmaScript 是官方规范定义
官方看民间都在乱搞， 开饭人员为了在不同的环境使用不同的 JavaScript 模块化解决方案 

Node 也是只在 8.5 版本之后才对 EcmapScript 6 module 进行了支持
后面学 Vue 的时候回去学习

less 编译器 > css
EcmapScript 6 -> 编译器  —> EcmaScript 5

目前前端情况都是使用了很多新技术 然后利用编译器工具打包可以在低版本浏览器运行
使用新技术的目的就是为了提高效率 增加可维护性

app.use 不仅仅是用来公开资源 静态资源的
还可以做其他事情
配置 body-parse 也是通过 app.use 来配置的

package.json 和 packge-lock.json

在 npm 5之前 是不会有 package-lock.json这个文件的
npm 5 之后才加入了这个文件
当你安装包的时候，npm 都会生成或者跟新 package-lock.json这个文件 
packge-lock.json 包含了所有的依赖信息
package-lock.json解析速度比package.json文件块 


MongoDB
关系型数据库和菲关系型数据库
表就是关系
或者表与表之间存在关系
 . 所有的关系型数据库都需要通过SQL语言来操作
 . 所有的关系型数据库在操作之前都需要设计表结构
 . 而且数据库表还支持约束
   。 唯一的
   。 主键
   。 默认值
   。 非空
 . 非关系型数据库非常的灵活
 . 有的非关系型数据库就是key-value 对儿
 . 但是MongoDB 是长的最像关系型数据库的非关系型数据
   。 数据库 -》 数据库
   。 数据表 -》 集合（数组）
   。 表记录 -》（文档对象）
 . MongoDB 不需要设计表结构
 . 也就是说你可以任意的往里面存数据 没有结构性这么一说

连接和退出数据库
连接
mongo

退出
exit 然后回车就退出链接

基本命令

. show dbs
 。 查看当前所有数据库
. db 
 。 查看当前操作的数据库  
. use 数据库名称
 。 切换到指定的数据库(如果没有会新建)
. 插入数据


> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
> db
itcast
> db.students.insertOne({"name":"Jack"})
{
	"acknowledged" : true,
	"insertedId" : ObjectId("5e1a0501293b15c6e52e1a7a")
}
> 


方法一
使用官方的MongoDB操作API

方法二
使用第三方 mongoose 来操作 MongoDB 数据库
mongooose 基于 MongoDB 
https://mongoosejs.com  



> show collections
cats
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
test    0.000GB
> use test
switched to db test
> show collections
cats
> db
test
> db.cats.find()
{ "_id" : ObjectId("5e1a945bb3e8a00bfc7a9b1c"), "name" : "Zildjian", "__v" : 0 }
>



MongoDB 数据库的基本概念

数据库 可以有多个数据库
一个数据库中可以有多个集合  
一个集合中可以有多个文档（表记录）

{
   
   qq:{
      users:[
        {name:'张三', age: 15},
        {name:'李四', age: 16},
        {name:'王五', age: 17}
      ],
      products:[
        {},
        {},
        {} 
      ]
   }

   taobao:{


   }

   baidu:{

   }

}


node 中使用MySQL

https://www.npmjs.com 

关于在node中使用MySQL的文档
https://www.npmjs.com/package/mysql 


json-server 
可以写一个json文件 然后就可以发布出来一个接口了







npm install --global json-server
zfz:~ zhangfengzhou$ json-server -v
0.15.1
zfz:~ zhangfengzhou$ json-server -h
json-server [options] <source>

选项：
  --config, -c               Path to config file    [默认值: "json-server.json"]
  --port, -p                 Set port                             [默认值: 3000]
  --host, -H                 Set host                      [默认值: "localhost"]
  --watch, -w                Watch file(s)                                [布尔]
  --routes, -r               Path to routes file
  --middlewares, -m          Paths to middleware files                    [数组]
  --static, -s               Set static files directory
  --read-only, --ro          Allow only GET requests                      [布尔]
  --no-cors, --nc            Disable Cross-Origin Resource Sharing        [布尔]
  --no-gzip, --ng            Disable GZIP Content-Encoding                [布尔]
  --snapshots, -S            Set snapshots directory               [默认值: "."]
  --delay, -d                Add delay to responses (ms)
  --id, -i                   Set database id property (e.g. _id)  [默认值: "id"]
  --foreignKeySuffix, --fks  Set foreign key suffix (e.g. _id as in post_id)
                                                                  [默认值: "Id"]
  --quiet, -q                Suppress log messages from output            [布尔]
  --help, -h                 显示帮助信息                                 [布尔]
  --version, -v              显示版本号                                   [布尔]

示例：
  json-server db.json
  json-server file.js
  json-server http://example.com/db.json

https://github.com/typicode/json-server
zfz:~ zhangfengzhou$ json-server --watch /Users/zhangfengzhou/GitHub/JSLearn/14_NodeJS/day05/data.json





















