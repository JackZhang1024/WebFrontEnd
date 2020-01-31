// 这个 main.js是项目的JS入口文件

//1. 导入jquery
// import xxx from xxx 是ES6中导入模块的方式
// 
// webpack ./src/main.js ./dist/bundle.js
import $ from 'jquery'
// const $ = require('jquery');

$(function () {
  $('li:odd').css('backgroundColor', 'blue')
  $('li:even').css('backgroundColor', function () {
    return '#' + 'D97634'
  })
})


// 经过刚才的演示，Webpack 可以做什么事情》
//1. Webpack 能够处理js 文件的相互依赖关系
//2. Webpack 能够处理js的兼容问题， 把高级的浏览器不识别的语法转为低级的 浏览器可以正常识别的语法
//打包命令格式: webpack 要打包的文件路径 输出文件的路径
// webpack ./src/main.js -o ./dist/bundle.js  之前的命令不能用了
// 在生成bundle.js文件之后 就可以不用再写上面复杂的明林 直接根目录下执行 webpack 就行
// 