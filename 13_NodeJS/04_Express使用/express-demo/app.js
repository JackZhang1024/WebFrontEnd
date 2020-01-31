var express = require('express');

// 1. 创建 App
var app = express();

// 2. 当以 /public/ 开头的时候，去 ./public/ 目录中找对应的资源
// http://127.0.0.1:3000/public/login.html
// 推荐这种方式
app.use('/public/', express.static('./public/'));

// 别名 /abc/ 就是 /public/的别名 
// app.use('/abc/', express.static('./public/'));

// 当省略第一个参数的时候，则可以通过 省略/public的方式访问
// 这种方式的好处就是可以省略 /public 
// http://127.0.0.1:3000/login.html
// app.use(express.static('./public/'));

app.get('/', function(req, res) {
    // res.send('hello world 我爱北京');
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
   我爱北京天安门  天安门上太阳升 伟大领袖毛主席
</body>
</html>`);
});

// app.post('/', function(req, res){
// 	res.send('hello world'); 
// });




app.listen(3000, function() {
    console.log('express app is running...');
});