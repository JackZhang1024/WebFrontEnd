// 假设 main.js 还是我们的入口文件
// console.log('ooooook');

// webpack-dev-server 打包好的 main.js 是托管到了内存中的，所以在项目根目录中看不到的 
// 但是，我们可以认为，在项目根目录中，有一个看不见的main.js

//1. 这两个导入的时候，接收的成员名称 必须这么写
import React from 'react' // 创建组件 虚拟DOM元素 生命周期
import ReactDOM from 'react-dom' // 把创建好的组件 和 虚拟DOM 放到页面上展示
//2. 创建虚拟DOM元素
// 参数1： 创建的元素的类型，字符串，表示元素的名称
// 参数2： 是一个对象 或 null  表示当前这个 DOM元素的属性
// 参数3： 子节点 （包括 其他虚拟DOM 获取 文本子节点）
// 参数n:  其他子节点
// <h1 id="myh1" title="this is a h1">这是一个大大的H1</h1>
const myh1= React.createElement('h1', {
  id:'myh1',
  title:'this is a h1'
}, '这是一个大大的H1')

// 3. 使用 ReactDOM 把虚拟DOM渲染到页面上
// 参数1： 要渲染的那个虚拟DOM 元素
// 参数2： 指定页面上DOM元素当做容器
// const myh1 = ReactDOM.render(myh1, document.getElementById('app'))
// Uncaught ReferenceError: ReactDOM is not defined
const myDiv = React.createElement('div', null, '这是一个DIV元素', myh1)


// 渲染页面上的DOM结构，最好的方式，就是写HTML代码
// const mytest = <div>aaa</div>
ReactDOM.render(myDiv, document.getElementById('app'))
