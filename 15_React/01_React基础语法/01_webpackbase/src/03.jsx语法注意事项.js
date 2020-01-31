// 1. 导入包
import React from 'react'
import ReactDOM from 'react-dom'

let a = 20
let str = '你好， 我爱中国'
let boo = true
let title = '999'
const h1 = <h1>哈哈哈啊打电话</h1>
// const arr = [
//   <h2>这是h2</h2>,
//   <h3>这是h3</h3>
// ]

const arrStr =[
  '刘备','张飞','关羽','诸葛亮'
]

// 定义一个空数组 用来存放名称标签 
const nameArr=[] 
arrStr.forEach(item => {
   const temp =  <h5 key={item}>{item}</h5>
   nameArr.push(temp)
})

// 数组的map方法 又返回值 map 中必须写return 
// const result = arrStr.map(item=>{
//     return item+'~~'  
// })

// console.log(result);

// 调用 render函数渲染
// jsx XML比 HTML严格多了
// 什么情况下需要使用{} 当我们需要在 JSX 控制的区域内，写JS表达式，则需要把JS代码写到{}中
ReactDOM.render(<div>
  {a+2}
  <hr/>
  {str}
  <hr/>
  {boo? '条件为真':'条件为假'}
  <hr/>
  <p title={title}>这是p标签</p>
  {h1}
  {arrStr}
  {arrStr.map(item=>{
     return <h3 key={item}>{item}</h3> 
  })}
  <hr/>
  <p className="myele">啊哈哈的哈达哈</p>
  <label htmlFor=""></label>

  </div>, document.getElementById('app')) 

