// 浏览器中的JavaScript 是没有文件操作能力的
// 但是Node 中的JavaScript 具有文件操作的的能力

// fs 是file-system 的简写， 就是文件系统的意思
// 在node 中如果想要进行文件操作，就必须引入 fs 这个模块
// 在fs 这个模块中，就提供了所有的文件操作相关API

//1. 使用 require 方法加载fs核心模块
var fs = require('fs');

//2. 读取文件
//   第一个参数就是要读取的文件路径
//   第二个参数是一个回调函数
//   成功
//    data   数据
//    error  null
//   失败
//    data   null
//    error  错误对象 
fs.readFile('./hello.txt', function (error, data) {
	// body...
	//<Buffer 68 65 6c 6c 6f 2c 20 77 6f 72 6c 64>
	// 文件中存储的起始都是二进制数据 0 1 
	// 我们可以通过toString()方法来将其转为我们认识的数据格式
	// console.log(data.toString());
	if (error) {
        console.log(error);   
	} else {
        console.log(data.toString());  
	}
}) 
