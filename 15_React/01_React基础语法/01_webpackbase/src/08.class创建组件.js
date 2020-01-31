// 1. 导入包
import React from 'react'
import ReactDOM from 'react-dom'
// import '@/06.class基本使用'
// import '@/07.class继承学习'

class Movie extends React.Component {
  render() {
    return <div>这是一个Movie组件</div>
  }
}

ReactDOM.render(<div>
  1222
  <Movie></Movie>
</div>, document.getElementById('app'))

// ES6 class是
