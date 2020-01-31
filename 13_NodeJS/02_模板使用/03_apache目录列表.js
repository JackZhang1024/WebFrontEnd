var http = require('http');
var fs = require('fs');

// 1. 创建 Server
var server = http.createServer();

// 2. 监听request请求
server.on('request', function(request, response){
    var url = request.url;

    if (url === '/'){
        fs.readFile('/Users/zhangfengzhou/GitHub/JSLearn/14_NodeJS/day02/index.html', function(error, data) {
             if (error){
                 return response.end('404 Not Found'); 
             }
             response.end(data);
        });
    } else if (url ==='/apple/login.html'){
         fs.readFile('/Users/zhangfengzhou/GitHub/JSLearn/14_NodeJS/day02/apple/login.html', function(error, data) {
        
             if (error){
                 return response.end('404 Not Found'); 
             }
             response.end(data);
        });
    } else {
        response.end('404 Not Found');
    }
});


// 3. 启动服务
server.listen(3000, function() {
	console.log('running.....');
});





