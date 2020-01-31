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
// 提供服务，对数据的服务
// 发请求
// 接收请求
// 处理请求
// 发送响应
// 当客户端请求过来 就会自动触发服务器的 request请求事件 然后执行第二个参数，回调处理
server.on('request', function(){
   
    console.log('接收到请求了');
});

// 4. 绑定端口号，启动服务
server.listen(3000, function (argument) {
	// body...
	console.log('服务器启动成功了， 可以通过 http://127.0.0.1:3000/来进行访问');
});






