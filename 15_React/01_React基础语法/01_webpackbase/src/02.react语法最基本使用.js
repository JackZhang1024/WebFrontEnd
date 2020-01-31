// 1. 导入包
import React from 'react'
import ReactDOM from 'react-dom'

// 2. 创建虚拟DOM元素
// 回顾： 什么是虚拟DOM 用JS对象的形式  来表示 DOM 和DOM之间的嵌套关系
// const myDiv = React.createElement('div', { id: 'mydiv', title:'div title'}, '这是一个DIV元素');

// HTML 是最优秀的标记语言
// 在JS 文件中，默认不能写这种类似 HTML标记 否则打包失败
// 可以使用 babel 来转换 这些 JS 中的标签
// 这种在JS中混合写入 类似于HTML的语法 叫做JSX 语法 符合XML规范的JS 
// 注意： JSX语法的本质，还是在 运行的时候，被转换成 React.createElement 形式来执行的
const myDiv = <div id="mydiv" title="div title">这是一个div元素 哈哈
<h1>这是一个h1标签</h1>
</div>
// 3. 调用 render 函数
ReactDOM.render(myDiv, document.getElementById('app')) 
// ReactDOM.render(myDiv, document.body) 

