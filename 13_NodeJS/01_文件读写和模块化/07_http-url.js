var http = require('http');

// 1. 创建 server 
var server = http.createServer();
// 2. 监听请求事件 设置请求处理函数
server.on('request', function (request, response) {
	// body...
    console.log('接收到客户端发送过来的请求 '+request.url);
    console.log(request.socket.remoteAddress, request.socket.remotePort);
    // response.write('Hello ');
    // response.write('I like dumplings');

    // switch(request.url){
    //    case '/':
    //        response.write('hello 1');
    //        break;
    //    case '/b':
    //        response.write('hello 2');
    //        break;
    // }
    // response.end();

    // 发送响应数据并同时结束
    // response.end('hello world');
    var url = request.url;
    // if (url === '/') {
    //     response.end('index page');
    // } else if (url==='/login'){
    //     response.end('login page');
    // } else {
    //     response.end('404 Not Found');
    // }

    if (url ==='/products'){
        var products = [{
            name: '苹果 X',
            price: 8888
        },
        {
            name: '苹果 X1',
            price: 8888
        },
        {
            name: '苹果 X2',
            price: 8888
        }];
        var data = JSON.stringify(products);
        // 处理中文乱码问题 设置响应头的数据内容类型 Content-Type: text/plain;charset=utf-8
        response.setHeader('Content-Type', 'text/plain;charset=utf-8');
        response.end(data);
    }

});

// 3. 绑定端口号 启动服务
server.listen(3000, function () {
	// body...
	console.log('服务器可以访问了, http://127.0.0.1:3000/');
});
