// 1. 导入包
import React from 'react'
import ReactDOM from 'react-dom'


// 第一种创建组件的方式
function Hello(props) {
   // return null;
   return <div>hello {props.name}---{props.age}岁----{props.gender}</div>
}

const dog = {
   name: '大黄',
   age: 2,
   gender: '雄'
}

ReactDOM.render(<div>
   {/* <Hello name={dog.name} age={dog.age} gender={dog.gender}></Hello> */}
   <Hello {...dog}></Hello>
</div>, document.getElementById('app'))

var o1 = {
    age: 10,
    address:'北京市朝阳区八府庄苏宁大厦12楼',
    phone:'1821057'
}

// ...o1 ES6展开符
var o2 ={
   name:'lisi',
   ...o1
}

console.log(o2);
