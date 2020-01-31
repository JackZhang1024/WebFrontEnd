<?php 

  $zhangsan = array('name'=>'张三', 'age'=>18);
  
  // 利用header可以设置返回数据的类型 
  // 这样客户端收到的response就直接就是对象了 不用再去decode做转化对象处理
 
  header('Content-Type: application/json');
  echo json_encode($zhangsan);

?>