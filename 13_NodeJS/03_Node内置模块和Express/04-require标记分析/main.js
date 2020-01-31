// 如果是费路径的形式的模块标记
// 路径形式的模块
// ./
// ../
// /xxx 根目录操作
// .js后缀名可以省略
// require('./foo')


// 核心模块的本质也是文件
// 二进制文件 我们只需要按照名字来加载就可以了
// require('fs')
// require('http')

// 第三方模块
// 凡是第三方模块都必须通过npm来下载
// 使用的时候就可以通过 require('报名') 的方式来进行加载才可以使用
// 不可能有任何一个第三方包和核心模块的名字一样的
// 既不是核心模块也不是路径形式的模块
// 先找到当前文件所处目录中的 node_modules 目录
// node_modules/art-template
// node_modules/art-template/package.json 文件
// node_modules/art-template/package.json 文件中的main属性
// main属性就记录了 art-template的入口模块
// 然后加载使用这个第三方包
// 实际上最终加载的还是文件

// var template = require('art-template');

// 如果没有main属性或者没有main属性值是错误的或者是package.json 那么就会默认加载index.js
// index.js就是一个默认备选项

// 如果以上所有任何一个都不成立 就会计入上一级目录中node_modules目录查找
// 如果上一级还没有，则继续进入上上一级查找 
// ...
// 如果知道当前磁盘根目录还没找到，最后报错
// can not find module xxx

// 注意 我们一个项目中有且仅有一个 node_modules 放在项目根目录中 这样的话 所有的子目录中都可以访问到
// 不会出现有多个 node_modules

// 模块查找机制
// 优先从核心模块加载
// 路径形式模块加载
// 第三方模块加载

// 如果想要了解更多底层细节，可自行参考 《深入浅出Node.js》中的模块系统
var a_template = require('a');



