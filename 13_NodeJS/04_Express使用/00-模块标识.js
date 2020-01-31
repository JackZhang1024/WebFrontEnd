var fs = require('fs');

// 文件操作中的./可以省略
// fs.readFile('data/a.txt', function(error, data) {
//     // body
//     if (error) {
//         return console.log('读取失败');
//     }
//     console.log(data.toString());
// });

// 在模块加载中，相对路径中的 ./ 不能省略
// Error: Cannot find module 'data/foo.js'
// require('data/foo.js');


// { Error: ENOENT: no such file or directory, open '/data/a.txt'
//   errno: -2,
//   code: 'ENOENT',
//   syscall: 'open',
//   path: '/data/a.txt' 
// }

// fs.readFile('/data/a.txt', function(error, data) {
//     // body
//     if (error) {
//     	console.log(error);
//         return console.log('读取失败');
//     }
//     console.log(data.toString());
// });


// 在文件操作的相对路径中
// ./data/a.txt 相对于当前目录
// data/a.txt 相对于当前目录
// /data/a.txt 绝对路径 当前文件模块所处磁盘根目录
// c:/xx/xx.. 绝对路径


// 这里如果忽略了，则也是磁盘根目录
// require('/data/foo.js');



