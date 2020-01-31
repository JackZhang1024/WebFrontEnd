var http = require('http');
var fs = require('fs');

// 1. 创建 server 
var server = http.createServer();
// 2. 监听请求事件 设置请求处理函数
server.on('request', function(request, response) {
    var url = request.url;
    // if (url==='/'){
    //     response.end('<h1>hello world</h1>');   
    // }
    if (url === '/') {
        fs.readFile('./resource/index.html', function(error, data) {
            // body
            if (error) {
                response.setHeader('Content-Type', 'text/plain;charset=utf-8');
                response.end('文件读取失败，请稍后重试');
            } else {
                response.setHeader('Content-Type', 'text/html;charset=utf-8');
                response.end(data);
            }

        });
    } else if (url === '/dog') {
    	// 不同的资源对应不同的Content-Type 图片不需要字符编码
        fs.readFile('./resource/cute_dog.jpg', function(error, data) {
            // body
            if (error) {
                response.setHeader('Content-Type', 'text/plain;charset=utf-8');
                response.end('文件读取失败，请稍后重试');
            } else {
            	// 图片就不需要指定编码了 因为我们常说的编码一般指的是 字符编码
                response.setHeader('Content-Type', 'image/jpg');
                response.end(data);
            }
        });
    }

});

// 3. 绑定端口号 启动服务
server.listen(3000, function() {
    // body...
    console.log('服务器可以访问了, http://127.0.0.1:3000/');
});