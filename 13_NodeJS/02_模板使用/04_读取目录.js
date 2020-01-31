var fs = require('fs');
var dir = '/Users/zhangfengzhou/GitHub/JSLearn/14_NodeJS/day02/';
fs.readdir(dir,  function(error, files) {
	// body
	if (error) {
		console.log('目录错误');
	}
	console.log(files);
});