// 1. 导入包
import React from 'react'
import ReactDOM from 'react-dom'
import CmtList from '@/components/CmtList'

// 列表组件
// class CmtList extends React.Component {

//   constructor() {
//     super()
//     this.state = {
//       CommentList: [
//         { id: 1, user: '张三', content: 'hello world' },
//         { id: 2, user: '李四', content: '我是李四' },
//         { id: 3, user: '王五', content: '大家吃饭了吗' },
//         { id: 4, user: '赵六', content: '新年好啊' },
//         { id: 5, user: '刘七', content: '恭喜发财' },
//         { id: 6, user: '朱八', content: '新年来了,祝大家幸福' },
//       ]
//     }
//   }

//   render() {
//     console.log(this.state.CommentList.length);
//     return <div>
//       <h1>用户评论列表</h1>
//       {this.state.CommentList.map(item => {
//         console.log(item.user);
//       return <div key={item.id}>
//       <h2>评论人：{item.user}</h2>
//       <h3>评论：{item.content}</h3>
//       </div>
//       })}
//     </div>
//   }
// }

ReactDOM.render(<div>
  <CmtList></CmtList>
</div>, document.getElementById('app'))

