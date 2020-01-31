// 1. 导入包
import React from 'react'
import ReactDOM from 'react-dom'
// import '@/06.class基本使用'
// import '@/07.class继承学习'

class Movie extends React.Component {

  constructor() {
    super()
    this.state = {
      msg: '龙门飞甲'
    }
  }

  render() {
    // this.state 是私有属性 和vue中的 data(){return {}} 一样
    this.state.msg = '很好看啊'
    return <div>这是一个Movie组件{this.props.name}---{this.props.director}---{this.props.actor}
      <h3>{this.state.msg}</h3>
    </div>
  }
}

const movie = {
  name: '龙门飞甲',
  director: '徐克',
  actor: '李连杰'
}


ReactDOM.render(<div>
  1222
{/* <Movie name="122dddddd"></Movie> */}
  {/* <Movie name={movie.name} director={movie.director} actor={movie.actor}></Movie> */}
  <Movie {...movie}></Movie>
</div>, document.getElementById('app'))

// ES6 class是
