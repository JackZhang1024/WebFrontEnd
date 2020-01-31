var fs = require('fs');
var path = require('path');

//  __dirname 和 __filename 专门用来动态获取当前文件目录和文件所属目录的绝对路径
// fs.readFile('./a.txt', 'utf8', function(err, data) {
// 	// body
// 	if (err){
//        throw err;
// 	}
//     console.log(data.toString());
// })

var url_path = path.join(__dirname, './a.txt');
console.log(url_path);
fs.readFile(path.join(__dirname, './a.txt'), 'utf8', function(err, data) {
	// body
	if (err){
       throw err;
	}
    console.log(data.toString());
})






