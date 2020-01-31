<?php 
  

  $connection = mysqli_connect('127.0.0.1', 'root', 'root', 'demo', '8889');

  $query = mysqli_query($connection, 'select * from users');
  
  while ($row = mysqli_fetch_assoc($query)) {
        $data[] = $row; 
  }
   
  // header('Content-Type: application/json'); 
  // echo json_encode($data);
  
  if (empty($_GET['callback'])){
      header('Content-Type: application/json'); 
      echo json_encode($data);
      exit();
  }
  // 如果客户端采用的是script 标记对我发送的请求
  // 一定要返回一段 JavaScript
  header('Content-Type: application/javascript'); 
  $result = json_encode($data);
  // echo "receive({$result})";
  // echo "{$_GET['callback']}({$result})";
  $callback_name = $_GET['callback'];
  echo "typeof {$callback_name} === 'function' && {$callback_name}({$result})";
  

?>