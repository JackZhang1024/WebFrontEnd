// const Koa = require('koa')
import './main.js'
import Koa from 'koa'
import People from './people.js'
const app = new Koa()

// sayHi();
const people = new People();
people.sayHello();

app.listen(8225, console.log("application is start at port 8225"))


// 如何在nodejs中使用import export 
// 因为无法在nodejs的环境中直接使用 需要babel来转换执行 

// 1. 初始化项目 npm init --yes 创建 package.json文件
// 2. 安装执行模块 npm install babel-register babel-preset-env -D
// 3. 安装 koa模块 npm install koa
// 3. 创建server.js文件 

// 文件内容如下
// mport './main.js'
// import Koa from 'koa'
// const app = new Koa()

// app.listen(8225, console.log("application is start at port 8225"))

// 4. 创建start.js文件
// require('babel-register') ({
//     presets: [ 'env' ]
// })

// module.exports = require('./server.js')
// 5. 执行nodemon start.js文件

