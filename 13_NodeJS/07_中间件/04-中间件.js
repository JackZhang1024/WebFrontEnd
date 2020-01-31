var express = require('express');
var fs = require('fs');

var app = express();


// app.get('/abc', function(req, res, next){
//     console.log('/1');
//     req.foo = 'bar';
//     req.body = {};
//     next();
// });


// app.get('/abc', function(req, res, next){
//     console.log('/2');
//     console.log(req.foo);
//     console.log(req.body);
// });

app.get('/', function(req, res, next) {
    // zen 禅模式 
    fs.readFile('.d/asd/', function(err, data){
    	if (err){
            // res.status(500).send('Server Error');
            // 当调用next的时候，如果传递了参数， 则直接往后找到带有四个参数的应用程中间件
            // 当发生错误的时候，我们可以调用next传递错误对象
            // 然后就会被全局错误处理中间件处理
            next(err);
    	}
    });
});

app.get('/a', function(req, res, next) {
    // zen 禅模式 
    fs.readFile('.d/asd/', function(err, data){
    	if (err){
            res.status(500).send('Server Error');
    	}
    });
});

app.use(function(req, res, next){
	console.log('404'); 
	res.send('404');
});


// 配置错误处理中间件
app.use(function(err, req, res, next) {
    // console.log('出错了啦 app error handler', err.message);
    res.status(500).json({
    	err_code: 500,
    	message: err.message
    });
});


app.listen(3000, function() {
    console.log('app is running on port 3000');
});



// Express 中间件
// 应用程序级别中间件
// 路由级别中间件
// 错误处理中间件
// 内置中间件
// 第三方中间件

// 同一个请求所经过的中间件都是同一个请求对象和相应对象