// require 方法有两个作用：
// 1. 加载文件模块并执行里面的代码
// 2. 拿到被加载文件模块导出的接口对象
// 在每个文件模块中都提供了一个对象，export 
// exports 默认是一个空对象
// 要做的就是把所有需要被外部访问的成员进行导出
var ret = require('./b.js');

console.log(ret.foo);
console.log(ret.add(10, 20));
console.log(ret.age);