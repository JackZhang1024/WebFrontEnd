// 接下来 我们要干一件使用Node 很有成就感的一件事儿
// 你可以使用 Node 非常轻松的构建一个 Web 服务器
// 在Node中专门提供了一个核心模块 http
// http模块的职责就是帮你编写服务器的 

// 1. 加载HTTP核心模块
var http = require('http');
// 2. 使用http.createServer() 方法创建一个web服务器
// 返回一个Server实例
var server = http.createServer();
// 3. 对数据的服务
// request 请求事件处理函数，需要接受两个参数
// Request  请求对象
//     请求对象可以
// Response 响应对象
//    
server.on('request', function(request, response){
    //console.log('接收到请求了');
    console.log('收到客户端的请求了， 请求路径是： '+request.url);

    // response 对象有一个方法， write 可以用来给客户端发送响应数据
    // write 可以使用多次，但是最后一次一定要使用end结束响应，否则客户端会一直等待
    response.write('hello');
    response.write('world');
    // 告诉客户端 我的话说完了 你可以接收我的响应了
    response.end();
    // 思考： 由于我们现在的服务器能力还非常的弱 
    // 都只能响应 hello world
    // 希望当请求不同的路径处理不同的请求
    // login
    // register
    // add

});

// 4. 绑定端口号，启动服务
server.listen(3000, function () {
	// body...
	console.log('服务器启动成功了， 可以通过 http://127.0.0.1:3000/来进行访问');
});






