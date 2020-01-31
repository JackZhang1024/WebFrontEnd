// 在ES6 中 新增了一个API Promise
// Promise是一个构造函数

// 创建Promise 容器
// 1. 给别人一个承诺 
// Promise 容器一旦创建 就开始执行里面的代码
// 执行顺序 1 2 4 3

var fs = require('fs');

function pReadFile(filePath) {
    var p1 = new Promise(function(resolve, reject) {
        fs.readFile(filePath, 'utf8', function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    });
    return p1;
}

// p1就是那个承诺 
// 当p1承诺完成以后 然后(then) 做指定的操作
// then方法接收的 function 就是容器中的resolve 函数
// 链式调用
// p1
//     .then(function(data) {
//         console.log(data);
//         // 当p1读取成功的时候,
//         // 当前函数中 return 的结构在后面的then中的function接收到 
//         // 当你return 123 后面就接收到123 
//         // 当你return Hello 后面就接收到 hello 
//         // 没有 return 后面收到的就是 undefined
//         // 当你return的是一个Promise对象
//         // 当return 一个promise对象 后续的then中的方法第一个参数会作为
//         // p2的resolve
//         return p2;
//     }, function(err) {
//         console.log('读取文件a失败', err);
//     })
//     .then(function(data) {
//         console.log(data);
//         return p3;
//     }, function(err) {
//         console.log('读取文件b失败', err);
//         console.log(err);
//     })
//     .then(function(data) {
//         console.log(data);
//     }, function(err) {
//         console.log('读取文件c失败', err);
//         console.log(err);
//     });

// 封装Promise的readFile
pReadFile('./data/a.txt')
     .then(function(data){
        console.log(data);
        return pReadFile('./data/b.txt');
     })
     .then(function(data){
        console.log(data);
        return pReadFile('./data/c.txt'); 
     })
     .then(function(data){
         console.log(data);
     });


