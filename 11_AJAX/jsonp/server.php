<?php 
  

  $connection = mysqli_connect('127.0.0.1', 'root', 'root', 'demo', '8889');

  $query = mysqli_query($connection, 'select * from users');
  
  while ($row = mysqli_fetch_assoc($query)) {
        $data[] = $row; 
  }
   
  header('Content-Type: application/json'); 
  echo json_encode($data);
  
     
?>