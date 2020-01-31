// 1. 导入包
import React from 'react'
import ReactDOM from 'react-dom'
// import Hello from './components/Hello.jsx'
// import Hello from './components/Hello'
// @ 符号的使用
import Hello from '@/components/Hello'

const dog = {
   name: '大黄',
   age: 2,
   gender: '雄'
}

ReactDOM.render(<div>
   <Hello {...dog}></Hello>
</div>, document.getElementById('app'))
