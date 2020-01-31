var fs = require('fs');
var path = require('path');
// ./a.txt 相对于当前文件路径
// ./a.txt 相对于执行node 命令所处的路径
// 就是说 文件操作路径中 相对路径设计的就是相对于执行node命令所处的路径
var filepath = path.join(__dirname, 'a.txt');
console.log(filepath);
// fs.readFile('./a.txt', 'utf8', function(err, data) {
// 	// body
//     if (err){
//        throw err;
//     }
//     console.log(data);
// 

fs.readFile(filepath, 'utf8', function(err, data) {
	// body
    if (err) {
       throw err;
    }
    console.log(data);
})



