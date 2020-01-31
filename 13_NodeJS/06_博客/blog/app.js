var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
// 导入router模块
var router = require('./router');
// session
var session = require('express-session');

var app = express();

// app.use('/public/', express.static('./public/'));
// app.use('/views/', express.static('./public/'));
// 把上面的路径改成绝对路径
app.use('/public/', express.static(path.join(__dirname, './public/')));
app.use('/views/', express.static(path.join(__dirname, './views/')));
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')));

// 设置模板引擎
// 在node中，有很多的第三方模板引擎都可以使用 不是只有 art-template
// ejs, jade handlerbars nunjunks
app.engine('html', require('express-art-template'));
// 默认就是 ./views目录
app.set('views', path.join(__dirname, './views/'));

// 配置解析表单 POST 请求体插件（注意：一定要在 app.use(router) 之前 ）
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// app.get('/', function(req, res){
//      // console.log('接收到请求了');
//      // res.send('hello');
//      // 测试使用
//      // res.render('demo.html', {name: 'Jack Ma'});
//      res.render('index.html');
// });

// 在Express 框架中，默认不支持 Session和Cookie
// 但是我们可以使用第三方中间件 express-session 来解决
// 1. npm install --save express-session
// 2. 配置 (一定要在 app.use(router) 之前)
// 3. 使用
//    添加 session数据： req.session.foo = 'bar'
//    访问 session数据   req.session.foo
// 提示： 默认Session 数据是内存存储的，服务器一旦重启就会丢失，真正的生产环境会把Session 
// 进行持久化存储
app.use(session({
	// 配置加密字符串，它会在原有加密基础上和这个字符串平起来去加密码
	// 目的是为了增加安全性，防止客户端恶意伪造
    secret: 'itcast',
    resave: false,
    // 无论是否使用 Session 我都默认直接给你分配一把钥匙
    saveUninitialized: true
}));


// 把路由挂载在app上
app.use(router);


// 因为前面的中间件没有能够处理请求 就会走到404
// 配置一个404页面中间件
app.use(function(req, res){
    res.render('404.html');  
});

// 配置一个全局错误处理中间件
app.use(function(req, res){
    
});

app.listen(3000, function(){
   console.log('app is running on 3000');	
});




