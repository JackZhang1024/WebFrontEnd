// 在Node没有全局作用域，它是文件模块作用域
// 模块是独立的 不能因为 a 加载过 fs 了， b 就不需要了，这是错误的理解
// 模块会缓存的
var fs = require('fs');

console.log(fs.readFile);

require('./foo');