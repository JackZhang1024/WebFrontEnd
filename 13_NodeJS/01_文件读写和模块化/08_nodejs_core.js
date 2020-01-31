// 核心模块
// Node为JavaScript提供了很多服务器级别的API，这些API绝大多数都被包装到了一个具名的核心模块中，
// 例如文件操作的 fs 核心模块， http 服务构建的 http 模块，path 路径操作模块，os 操作系统信息
// 模块使用
// var fs= require('fs');


var os = require('os');

var path = require('path');

console.log(os.platform());
// 获取当前机器的CPU信息
console.log(os.cpus());
// memory内存
console.log(os.totalmem());
// /Users/zhangfengzhou/GitHub/JSLearn/14_NodeJS/day01/hello.txt
// MacOS快速复制文件路径 Command+Option+C
// 获取扩展名
console.log(path.extname('/Users/zhangfengzhou/GitHub/JSLearn/14_NodeJS/day01/hello.txt'));


// 用户自定义模块
