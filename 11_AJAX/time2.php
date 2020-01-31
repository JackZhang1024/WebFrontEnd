<?php 
  

  header('Content-Type: application/javascript');
  // echo 'var a= {'time': 2132332342}';
  // echo 'foo({"time": 122442424444})';
  
  $json = json_encode(array('time'=> time()));
  // 在JSON格式的字符串外面包裹了一个函数的调用
  echo "foo({$json})"; 

?>