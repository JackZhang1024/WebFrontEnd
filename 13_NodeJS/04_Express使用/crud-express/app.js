/**
  app.js 入门模块

  职责：

  创建服务
  做一写服务相关配置
     模板引擎
     body-parser 解析表单 post 请求体
     提供静态资源服务
  挂载路由
  监听端口启动服务    
*/
var express = require('express');
var router = require('./router');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.use('/public/', express.static('./public/'));
app.use('/node_modules/', express.static('./node_modules/'));
app.engine('html', require('express-art-template'));

// 配置模板引擎和body-parser 一定要在 app.use(router)挂载路由之前
// 配置bodyParser 中间件 专门用来解析POST请求体
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// router(app);

// 把路由容器挂载到app 服务中
app.use(router);


// app.get('/', function(req, res) {
//     // res.send('Hello world');
//     // readFile 第二个参数是可选的 传入 utf-8 就是告诉他读取到的文件直接按照utf-8 编码
//     // 除了这样转化之外，也可以通过 data.toString() 的方式
//     // 从文件中读取到的数据一定是字符串
//     // 所以这里一定要手动转化成对象
//     fs.readFile('./db.json', 'utf-8', function(error, data) {
//         if (error) {
//             return res.status(500).send('Server Error');
//         }
//         // body
//         console.log(typeof data);
//         res.render('index.html', {
//             fruits: ['苹果', '橘子', '香蕉'],
//             students: JSON.parse(data).students
//         });
//     })
// });

app.listen(3000, function() {
    console.log('running on 3000');
});


// module.exports = app;



