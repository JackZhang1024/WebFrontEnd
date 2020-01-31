- 模块系统
  + 核心模块
  + 第三方模块
  + 自己写的模块
- npm 
- package.json 
- Express
  + 第三方web 开发框架
  + 高度封装了 http 模块
  + 更加专注于业务 而非底层细节
  + 知其所以然
  

  在Node中就可以很方便的来自定义这个URL地址，Node天生就可以把
  url地址处理的非常漂亮 
  
  自定义非常灵活
  
  什么是模块化
  文件作用域
  通信规则
     加载require
     导出
  
  CommonJS模块规范
  在Node中的Javascript还有一个很重要的概念 模块系统

加载 require

语法：
var 自定义变量名称 = require('模块');

导出 exports

Node中是模块作用域，默认文件中所有成员只在当前文件模块有效

导出多个成员（必须在对象中）：
exports.a = 123;
exports.b = 'hello';
exports.c = function(){
  console.log('xxx');
}
exports.d = {
    'name': 'Jack'
}

导出单个成员（拿到的就是：函数 字符串）
module.exports = 'hello';

以下情况会覆盖
module.exports = function(x, y){
   return x+y;
}

也可以这样导出多个成员
module.exports = {
   add:function(){

   },
   str: 'hello'
}


require方法加载规则
1. 核心模块


优先从核心模块加载


npm
node package manage

npm install art-template jquery bootstrap

npm install --save art-template 
这个命令多了一个dependencise属性 
显示了项目依赖了什么模块

package.json

我们建议每一个项目都要有一个 package.json 文件（包描述文件，就像产品的说明书一样）
我们可以通过 npm init 来自己生成 package.json 文件


npm install --save jquery 


操作 
zfz:npm-project zhangfengzhou$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (npm-project) lucky-npm
version: (1.0.0) 0.0.1
description: lucky-npm
entry point: (index.js) main.js
test command: 
git repository: 
keywords: 
author: zfz
license: (ISC) 
About to write to /Users/zhangfengzhou/GitHub/JSLearn/14_NodeJS/day03/npm-project/package.json:

{
  "name": "lucky-npm",
  "version": "0.0.1",
  "description": "lucky-npm",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "zfz",
  "license": "ISC"
}


Is this ok? (yes) yes
zfz:npm-project zhangfengzhou$ 


npm install --save jquery 

pagckage.json文件会多出一个dependencies属性 
 
{
  "name": "lucky-npm",
  "version": "0.0.1",
  "description": "lucky-npm",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "zfz",
  "license": "ISC",
  "dependencies": {
    "jquery": "^3.4.1"
  }
}


如果删除了node_modules文件目录但是package.json文件还在
我们只需要 npm install 命令就可以重新下载安装丢失的模块

第三方模块管理的网站 npmjs.com

如果npmjs.com 中如果没有找到想要的第三方 那么npm也不能下载想用的模块

npm --version 
升级 npm (自己升级自己)
npm install --global npm 

常用npm常用命令

1. npm init -y 可以跳过向导 快速生成
2. npm install 一次性把dependencies 选项中的依赖项全部安装
3. npm install 包名 只下载
4. npm install --save 包名     下载并保存依赖项（package.json文件）
5. npm uninstall 包名 只删除 如果有依赖项 依赖项依旧会保存
6. npm uninstall --save 包名 删除的同时 也会把依赖信息也删除
7. npm help 查看使用帮助
8. npm 命令 --help   npm uninstall --help

解决npm被墙的问题
npm 存储包文件的服务器放在国外，有时候会被墙 速度很慢，所以我们需要解决这个问题
http://npm.taobao.org/ 淘宝的开发团队把npm在国内做了一个备份

安装淘宝的cnpm
// --global 表示安装到全局 而非当前目录 
npm install --global cnpm 

//接下来你安装包的时候吧之前的npm替换成cnpm
//举个例子：
//这里还是走国外的npm服务器 速度比较慢
npm install jquery 

//使用cnpm 就会通过淘宝的服务器下载 jquery 
cnpm install jquery  

如果不想安装 cnpm 又想使用淘宝的服务器来下载
npm install jquery --registry =https://registry.npm.taobao.org
但是每一次手动这样添加参数很麻烦 所以我们可以把这个选项加入配置文件中：
npm config set registry https://registry.npm.taobao.org

查看 npm 配置信息
npm config list


Express 
原生的 http 在某些方面表现不足以应对我们的开发需求， 所以我们就需要使用框架来加快我们的开发效率，
框架的目的就是提高效率，让我们的代码更高度统一

在Node中，

expressjs.com







   
   
   
