import React from 'react'

export default function CmtItem(props){
  return <div key={props.id}>
  <h2>评论人：{props.user}</h2>
  <h3>评论：{props.content}</h3>
  </div>;
}
