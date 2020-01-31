// 0. 安装
// 1. 硬包

var express = require('express');

// 2. 创建你服务器应用程序
// 也就是原来的 http.createServer
var app = express();

// 公开指定目录
// 只要这样做了, 你就可以直接通过 /public/xx的方式访问 public 目录中的所有资源了  
// 默认浏览器中是不能访问了
app.use('/public/', express.static('./public/'));
app.use('/static/', express.static('./static/'));
// http://127.0.0.1:3000/node_modules/accepts/README.md
app.use('/node_modules/', express.static('./node_modules/'));

// 模板引擎，在Express也是一个API的事情

// 当服务器收到get 请求 /的是偶，执行请求
app.get('/', function(req, res){
    res.send('hello express!');
});

app.get('/about', function(req, res){
	// { name: 'zhangsan' }
	console.log(req.query);
	// 在Express中使用模板引擎有更好的方式： res.render('文件名', {模板对象});
	// art-template 官方文档 如何让art-template结合Express来使用
    res.send('hello about!');
});

// 相当于 server.listen
app.listen(3000, function(){
	console.log('app is running at port 3000');
});





