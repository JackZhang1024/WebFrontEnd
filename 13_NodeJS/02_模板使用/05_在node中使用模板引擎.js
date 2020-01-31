// art-template 
// art-template 在node服务端也可以使用
// 在day02根目录下 执行 npm install art-template 命令
// 安装 
// npm install art-template
// 该命令在哪执行就会把包下载到哪里，默认会下载到 node_modules目录中
// node_modules 不要改 也不支持该

// 1. 安装 npm install art-template
// 2. 在需要使用的文件模块中加载 art-template
// 只需要在使用模块的地方引入就可以了 require('art-template');
// 引入的模块名称就是install时候的名称
// 3. 查文档 使用模板引擎的API

var template = require('art-template');
var fs = require('fs');
// var tpl = `<!DOCTYPE html>
//     	<html>
//     	<head>
//     		<title>Document</title>
//     	</head>
//     	<body>
// 	    	大家好，我叫 {{ name }}
// 	     	我今年 {{age}} 岁了
// 	     	我来自 {{address}}
// 	     	我喜欢 {{each hobbies}} {{ $value }} {{/each}}
//     	</body>
//     	</html>`;

fs.readFile('./tpl.html', function(error, data) {
    if (error) {
        return console.log('读取文件失败了');
    }
    // 默认读取到的data 是二进制文件 而模板引擎的render方法需要传递的是字符串
    // 所以需要把data二进制数据转为字符串 才可以给模板引擎使用 .toString()
    var ret = template.render(data.toString(), {
        name: 'Jack',
        age: 18,
        address: '北京市昌平区',
        hobbies: [
            '写代码',
            '唱歌',
            '读书'
        ]
    });
    console.log(ret);

});