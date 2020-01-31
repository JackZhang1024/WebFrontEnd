var express = require('express');

var app = express();

// 中间件： 处理请求的，本质就是个函数
// 在Express中， 对中间件有几种分类

// 当请求进来, 会从第一个中间件开始进行匹配
//    如果匹配，则进来 
//    如果不配，则继续匹配下一个中间件 
// 不关心请求路径和请求方法的中间件
// 也就是说任何请求都会进去这个中间件
// 中间件本身就是一个方法 该方法接收三个参数
// Request 请求对象
// Response 响应对象
// next 下一个中间件

// 当一个请求进入一个中间件之后，如果不调用next()不会进入下一个中间件
// 所以next 是一个方法，用来调用下一个中间件

// app.use(function(req, res){
//      console.log('请求进来了 1');
// });


// app.use(function(req, res, next){
//      console.log('请求进来了 1');
//      // 有了next()方法执行下一个中间件
//      next();
// });


// app.use(function(req, res, next){
//      console.log('请求进来了 2');
//      next();
// });

// app.use(function(req, res, next){
//      console.log('请求进来了 3');
//      res.send('hello world');
// });

// app.use(function(req, res, next){
// 	console.log(1);
// 	next();
// });

// // 关心请求路径的中间件
// // 以 /xx 开头的路径中间件
// app.use('/a', function(req, res, next){
//     console.log(req.url);
// });


// app.use('/b', function(req, res, next){
//     console.log(req.url);
// });

// app.use(function(req, res, next){
//     console.log('2');
// })

// 除了以上中间件之外，还有一种最常用的
// 严格匹配请求方法和请求路径的中间件
// app.get
// app.post

app.use(function(req, res, next){
     console.log(1);
     next();
});

app.get('/', function(req, res, next){
    console.log('/');
    next();
});

app.get('/a', function(req, res, next){
    console.log('/a');
    next();
});


app.post('/b', function(req, res, next){
    console.log('/b');
});


app.listen(3000, function(){
	console.log('app is running on port 3000');
});



// Express 中间件
// 应用程序级别中间件
// 路由级别中间件
// 错误处理中间件
// 内置中间件
// 第三方中间件

// 同一个请求所经过的中间件都是同一个请求对象和相应对象




