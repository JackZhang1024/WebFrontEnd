<?php 
  

  $connection = mysqli_connect('127.0.0.1', 'root', 'root', 'demo', '8889');

  $query = mysqli_query($connection, 'select * from users');
  
  while ($row = mysqli_fetch_assoc($query)) {
        $data[] = $row; 
  }
  
  // 同意所有的源对我发起请求 
  header('Access-Control-Allow-Origin: *'); 
  // 只同意http://ajax.io源发起请求
  // header('Access-Control-Allow-Origin: http://ajax.io'); 
  header('Content-Type: application/json');
  echo json_encode($data);
  
?>