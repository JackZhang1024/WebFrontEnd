// 服务端渲染就是字符串替换然后发送给客户端
var http = require('http');
var fs = require('fs');
var template = require('art-template');

// 1. 创建 Server
var server = http.createServer();

// 2. 监听request请求
server.on('request', function(request, response){
    var url = request.url;
    if (url === '/'){
        fs.readFile('./tpl_apache.html', function (error, data) {
             // body...
             if (error){
                return response.end('Can not find file');
             }
             var tpl = data.toString();
             var tplData = {
                                name: 'Jack',
                                age: 18,
                                address: '北京市昌平区',
                                hobbies: [
                                    '写代码',
                                    '唱歌',
                                    '读书'
                                ],
                                title:'我是标题'
                            };
            var htmlStr = template.render(data.toString(), tplData);
            response.end(htmlStr);
        });
    } else {
        response.end('404 Not Found');
    }
});


// 3. 启动服务
server.listen(3000, function() {
	console.log('running.....');
});


